const { VITE_G_KEY } = import.meta.env;

// Good place to generate full request url, based on API endpoints
// e.g. `https://yourdomain.com/api/${endpoint}`
// In this example we just add script id from .env
export const URL = (endpoint: string): string =>
  `https://script.google.com/macros/s/${VITE_G_KEY}/exec`;
