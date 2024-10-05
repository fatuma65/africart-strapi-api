
module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      cors: {
         // Allow your frontend origin
        origin: ["http://localhost:5173"],
      },
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': [
            "'self'", 
            'https://js.stripe.com', 
            'https://m.stripe.network',
            "'sha256-/5Guo2nzv5n/w6ukZpOBZOtTJBJPSkJ6mhHpnBgm3Ls='", 
            "'sha256-5+YTmTcBwCYdJ8Jetbr6kyjGp0Ry/H7ptpoun6CrSwQ='", 
          ],
          'frame-ancestors': ["'self'"],
          'img-src': ["'self'", 'data:', 'blob:', 'https://js.stripe.com'],
          'connect-src': [
            "'self'",
            'https://api.stripe.com',
            'https://m.stripe.network',
          ],
          // To allow upgrade-insecure-requests, but avoid duplicates
          upgradeInsecureRequests: [], 

        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
