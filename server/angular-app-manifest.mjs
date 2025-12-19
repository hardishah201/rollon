
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/admin-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4921, hash: '2ebe9b289354271d025b3625dfb3e6bc7619d9995ab2ed4f9275d2dce8ad8afa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 944, hash: '1796e758cddae2bfe1bd155a62472da76a280d8c8a46c33af36a348f28e08b90', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 16675, hash: '40d43564e167c4d713105afe7193831658d79766b9a57c5eeb2d4ae3b00ebb48', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27163, hash: 'f87013038d807930583311eff5b0f1ab3070cd01e95fbd5f3ca2ca3835af2e88', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin-dashboard/index.html': {size: 16675, hash: '40d43564e167c4d713105afe7193831658d79766b9a57c5eeb2d4ae3b00ebb48', text: () => import('./assets-chunks/admin-dashboard_index_html.mjs').then(m => m.default)},
    'styles-BORNT5BH.css': {size: 243060, hash: 'n/88Cj+E+i8', text: () => import('./assets-chunks/styles-BORNT5BH_css.mjs').then(m => m.default)}
  },
};
