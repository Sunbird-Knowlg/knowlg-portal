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
app.use(express.static(process.cwd()+"/dist/"));

app.post([routes.API.CONTENT.UPLOAD, routes.API.CONTENT.UPLOAD_URL], proxy(BASE_URL, {
    https: true,
    parseReqBody: false,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      originalUrl = originalUrl.replace("/v3/", "/v2/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);

app.use([routes.API.DIALCODE.SEARCH, routes.API.ASSET.CREATE], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      originalUrl = originalUrl.replace("/v3/", "/v1/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);
app.post(routes.API.TELEMMETRY, function(req, res) {
  console.log(JSON.stringify(req.body), 'telemetry logged');
  res.status(200).json({message: "telemetry logged"})
});
app.post(routes.API.USER_SEARCH, function(req, res) {
  res.status(200).json({users: []})
});
app.patch(routes.API.CONTENT.COLLABORATOR_UPDATE, function(req, res) {
  res.status(200).json({message: "Collabaration update successful"})
});
app.use([ 
   routes.API.ASSESSMENT, 
   routes.API.CONTENT.CREATE,
   routes.API.CONTENT.BUNDLE,
   routes.API.CONTENT.UNLISTED_PUBLISH,
   routes.API.CONTENT.REVIEW_COMMENTS,
  ], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      return urlHelper.parse(req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);

app.use([routes.API.CONTENT.HIERARCHY], proxy(BASE_URL, {
  https: true,
  proxyReqPathResolver: function (req) {
    let originalUrl = req.originalUrl.replace("/action/", "/api/");
    originalUrl = originalUrl.replace("/content/v3/", "/collection/v1/");
    return urlHelper.parse(originalUrl).path;
  },
  proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
})
);
app.use([
   routes.API.BUNDLE,
   routes.API.ITEMS_CREATE,
   routes.API.ITEMS_UPDATE,
   routes.API.CONTENT.UNLISTED_PUBLISH
  ], proxy(BASE_URL, {
  https: true,
  proxyReqPathResolver: function (req) {
    let originalUrl = req.originalUrl.replace("/action/", "/api/");
    originalUrl = originalUrl.replace("/v3/", "/v1/");
    return urlHelper.parse(originalUrl).path;
  },
  proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
})
);
app.use([routes.API.CONTENT.UPDATE], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      originalUrl = originalUrl.replace("/v3/", "/v2/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);

app.use([
    routes.API.CHANNEL,
    routes.API.CONTENT.GENERAL,
    routes.API.FRAMEWORK,
    routes.API.COMPOSITE,
    routes.API.LANGUAGE,
  ], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      originalUrl = originalUrl.replace("/v3/", "/v1/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);

app.use([routes.API.PREFIX.ACTION], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);

app.use([routes.API.PREFIX.ASSETS, routes.API.PREFIX.API], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      return urlHelper.parse(req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);

app.use([
    routes.API.GENERAL.CONTENT_PREVIEW,
    routes.API.GENERAL.CONTENT_PLUGINS,
    routes.API.GENERAL.ASSET_PUBLIC,
    routes.API.GENERAL.GENERIC_EDITOR,
    routes.API.GENERAL.CONTENT_EDITOR,
  ], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      return require("url").parse(`https://${BASE_URL}` + req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);

app.get('/*', (req,res) => {
  res.sendFile(process.cwd()+"/dist/index.html")
});


http.createServer(app).listen(app.get("port"), 3000);
