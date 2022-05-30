var express = require("express"),
  http = require("http");
(bodyParser = require("body-parser")),
  (proxy = require("express-http-proxy")),
  (urlHelper = require("url"));
const proxyUtils = require('./proxyUtils.js')
var envVariables =  require('./config/environment');
var BASE_URL = envVariables.BASE_URL;
var routes = require('./config/constants');

var app = express();
app.set("port", 3000);
app.use(express.json());

app.post([routes.URLS.CONTENT.UPLOAD], proxy(BASE_URL, {
    https: true,
    parseReqBody: false,
    proxyReqPathResolver: function (req) {
      return urlHelper.parse(req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use([routes.URLS.DIALCODE.SEARCH, routes.URLS.ASSET.CREATE], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      originalUrl = originalUrl.replace("/v3/", "/v1/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use([ 
   routes.URLS.CONTENT.HIERARCHY,
   routes.URLS.ASSESSMENT, 
   routes.URLS.CONTENT.CREATE,
   routes.URLS.CONTENT.BUNDLE,
   routes.URLS.CONTENT.UNLISTED_PUBLISH,
   routes.URLS.CONTENT.REVIEW_COMMENTS,
  ], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      return urlHelper.parse(req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use([routes.URLS.CONTENT.UPDATE], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      originalUrl = originalUrl.replace("/v3/", "/v2/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use([
    routes.URLS.CHANNEL,
    routes.URLS.CONTENT.GENERAL,
    routes.URLS.FRAMEWORK,
    routes.URLS.COMPOSITE,
    routes.URLS.LANGUAGE,
  ], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      originalUrl = originalUrl.replace("/v3/", "/v1/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use([routes.URLS.PREFIX.ACTION], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use([routes.URLS.PREFIX.ASSETS, routes.URLS.PREFIX.API], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      return urlHelper.parse(req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use([
    routes.URLS.GENERAL.CONTENT_PREVIEW,
    routes.URLS.GENERAL.CONTENT_PLUGINS,
    routes.URLS.GENERAL.ASSET_PUBLIC,
    routes.URLS.GENERAL.GENERIC_EDITOR,
    routes.URLS.GENERAL.CONTENT_EDITOR,
  ], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      return require("url").parse(`https://${BASE_URL}` + req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);
http.createServer(app).listen(app.get("port"), 3000);
