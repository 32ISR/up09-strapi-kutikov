const { mergeConfig } = require('vite');

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      hmr: {
        hostname: "https://literate-guide-q9gwwj4pqwjfxgj4-1337.app.github.dev",
        protocol: "wss",
        port: 443,
        clientPort: 443
      }
    }
  });
};
