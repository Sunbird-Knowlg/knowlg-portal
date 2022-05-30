var express = require("express"),
  http = require("http");
(bodyParser = require("body-parser")),
  (proxy = require("express-http-proxy")),
  (urlHelper = require("url"));
const proxyUtils = require('./proxyUtils.js')

var app = express();
app.set("port", 3000);
app.use(express.json());

app.post(["/action/content/v3/upload/:do_id"], proxy(BASE_URL, {
    https: true,
    parseReqBody: false,
    proxyReqPathResolver: function (req) {
      return urlHelper.parse(req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use(['/action/dialcode/v3/search', 'action/asset/v1/create'], proxy(BASE_URL, {
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
   "/action/content/v3/hierarchy/*",
   "/action/assessment/v3/*", 
   "/action/content/v3/create",
   "/action/content/v3/bundle",
   "/action/content/v3/unlisted/publish/*",
   "/action/review/comment/v1/read/comment",
  ], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      return urlHelper.parse(req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use(["/action/content/v3/update/*"], proxy(BASE_URL, {
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
    "/action/channel/v3/*",
    "/action/content/v3/*",
    "/action/framework/v3/*",
    "/action/composite/v3/*",
    "/action/language/v3/*",
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

app.use(["/action"], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use(["/assets", "/api"], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      return urlHelper.parse(req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePrivateRequestHeaders()
  })
);

app.use([
    "/content/preview/*",
    "/content-plugins/*",
    "/assets/public/*",
    "/generic-editor/*",
    "/content-editor/*",
  ], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      return require("url").parse(`https://${BASE_URL}` + req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);
http.createServer(app).listen(app.get("port"), 3000);
