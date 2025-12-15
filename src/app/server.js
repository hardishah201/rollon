import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/submit-enquiry', (req, res) => {
  const data = req.body;

  // Path to enquiry.json file
  const filePath = './form-submission/enquiry.json';

  // Read existing data
  let enquiries = [];
  if (fs.existsSync(filePath)) {
    enquiries = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  // Add new enquiry
  enquiries.push(data);

  // Save back to file
  fs.writeFileSync(filePath, JSON.stringify(enquiries, null, 2));

  res.json({ message: 'Enquiry saved successfully!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
