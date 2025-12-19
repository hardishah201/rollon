import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { promises as fs } from 'node:fs';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

// Parse JSON bodies
// Allow CORS for local development
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }
  return next();
});

app.use(express.json());

/**
 * Endpoint to receive enquiries and append them to enquiry.json
 */
app.post('/submit-enquiry', async (req, res) => {
  try {
    const data = req.body;
    const filePath = join(import.meta.dirname, 'app', 'form-submission-details', 'enquiry.json');

    // Read existing file and support two shapes:
    // { users: [...] }  OR  [ ... ]
    let content = '[]';
    try {
      content = await fs.readFile(filePath, 'utf-8');
    } catch (err) {
      // file may not exist yet
    }

    let parsed: any;
    try {
      parsed = JSON.parse(content || '[]');
    } catch (err) {
      parsed = [];
    }

    const entry = { ...data, receivedAt: new Date().toISOString() };

    if (parsed && typeof parsed === 'object' && Array.isArray(parsed.users)) {
      parsed.users.push(entry);
      await fs.writeFile(filePath, JSON.stringify(parsed, null, 2), 'utf-8');
    } else if (Array.isArray(parsed)) {
      parsed.push(entry);
      await fs.writeFile(filePath, JSON.stringify(parsed, null, 2), 'utf-8');
    } else {
      // unknown shape — overwrite with array
      await fs.writeFile(filePath, JSON.stringify([entry], null, 2), 'utf-8');
    }

    res.status(201).json({ success: true });
  } catch (err) {
    console.error('Error saving enquiry:', err);
    res.status(500).json({ success: false, error: 'Failed to save enquiry' });
  }
});

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use(async (req, res, next) => {
  try {
    const response = await angularApp.handle(req);
    if (response) {
      writeResponseToNodeResponse(response, res);
      return;
    }
    return next();
  } catch (err) {
    return next(err);
  }
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
