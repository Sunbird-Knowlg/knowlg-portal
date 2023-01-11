const PROXY_CONFIG = [
  {
      context: [
          "/content-plugins",
          "/generic-editor",
          "/content-editor",
          "/action",
          "/content",
          "/api",
          "/assets"
      ],
      "target": "https://dev.knowlg.sunbird.org/",
      "secure": false,
      "logLevel": "debug",
      "changeOrigin": true
  }
]

module.exports = PROXY_CONFIG;
