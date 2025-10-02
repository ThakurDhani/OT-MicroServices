const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy for Employee Service (e.g., Create, List, etc.)
  app.use(
    '/employee',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );

  // Proxy for Salary and Attendance Service (assuming both on 8081)
  app.use(
    ['/salary', '/attendance'],
    createProxyMiddleware({
      target: 'http://localhost:8081',
      changeOrigin: true,
    })
  );

  // Optional: Add Notification Service if needed
  app.use(
    '/notification',
    createProxyMiddleware({
      target: 'http://localhost:8083', // ← Change if different
      changeOrigin: true,
    })
  );
};
