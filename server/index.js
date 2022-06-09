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

/**
 * [ this function is used for content upload ]
 * we are replaceing the /v3/ to /v2/ because its been onboarded as /content/v2/upload
 * we are replaceing the /action/ to /api/ because to redirect to service itself 
 * @param  {} [routes.API.CONTENT.UPLOAD This is the content upload api route path 
 * @param  {} routes.API.CONTENT.UPLOAD_URL] This is the content upload api route path
 * @param  {} proxy(BASE_URL) This base url
 * @param  {true} {https} 
 * @param  {false} parseReqBody 
 * @param  {function(req} proxyReqPathResolver This is used to replace request url path
 */
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
/**
 * [ this function is used for dial code search and asste create ]
 * we are replaceing the /v3/ to /v2/ because its been onboarded as /v2/
 * we are replaceing the /action/ to /api/ because to redirect to service itself 
 * @param  {} [routes.API.DIALCODE.SEARCH This is the dial code search api route path
 * @param  {} routes.API.ASSET.CREATE] This is the dial asset create api route path
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */
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

/**
 * [ this function is used to capture telemmetry logs ]
 * @param  {} routes.API.TELEMMETRY This is the telemetry api route path
 * @param  {} {console.log(JSON.stringify(req.body) This is the logging of the request data
 * @param  {} ;res.status(200) Sending the response 
 */
app.post(routes.API.TELEMMETRY, function (req, res) {
  console.log(JSON.stringify(req.body), 'telemetry logged');
  res.status(200).json({ message: "telemetry logged" })
});

/**
 * [ this function is used get the list of user details ]
 * @param  {} routes.API.USER_SEARCH This is the user search api route path
 * @param  {} res
 * @param  {} {res.status(200) Sending the api response
 * @param  {[]}} .json({users}) Sending empty array response 
 */
app.post(routes.API.USER_SEARCH, function (req, res) {
  res.status(200).json({ users: [] })
});

/**
 * [ this function is used to update user collaboration ]
 * @param  {} routes.API.CONTENT.COLLABORATOR_UPDATE This is the collaborator api route path
 * @param  {} function(req
 * @param  {} res
 * @param  {} {res.status(200 Api response status
 * @param  {"Collabarationupdatesuccessful"}} .json({message}) Sending api response
 */
app.patch(routes.API.CONTENT.COLLABORATOR_UPDATE, function (req, res) {
  res.status(200).json({ message: "Collabaration update successful" })
});

/**
 * [ this function is used create content and add review comments to content ]
 * @param  {} routes.API.CONTENT.CREATE  This is the content create  api route path
 * @param  {} routes.API.CONTENT.REVIEW_COMMENTS This is the content review comments  api route path
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */
app.use([
  routes.API.CONTENT.CREATE,
  routes.API.CONTENT.REVIEW_COMMENTS,
], proxy(BASE_URL, {
  https: true,
  proxyReqPathResolver: function (req) {
    return urlHelper.parse(req.originalUrl).path;
  },
  proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
})
);

/**
 * [ this function is used get the content hierarchy details ]
 * we are replaceing the /content/v3/ to /collection/v1/ because its been onboarded as /collection/v1/
 * we are replaceing the /action/ to /api/ because to redirect to service itself 
 * @param  {} [routes.API.CONTENT.HIERARCHY] This is the content hierarchy api route path
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */

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

/**
 * [ this function is used for the content bundles and items create and update and unlist content publish  ]
 * we are replaceing the /v3/ to /v1/ because its been onboarded as /v1/
 * we are replaceing the /action/ to /api/ because to redirect to service itself 
 * @param  {} [routes.API.CONTENT.BUNDLE This is the bundle api route path
 * @param  {} routes.API.ITEMS_CREATE This is the items create api route path
 * @param  {} routes.API.ITEMS_UPDATE This is the items update api route path
 * @param  {} routes.API.CONTENT.UNLISTED_PUBLISH] This is the content unlisted publish api route path
 * @param  {} routes.API.ASSESSMENT This is the assessment api route path
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */
app.use([
  routes.API.CONTENT.BUNDLE,
  routes.API.ITEMS_CREATE,
  routes.API.ITEMS_UPDATE,
  routes.API.CONTENT.UNLISTED_PUBLISH,
  routes.API.ASSESSMENT,
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
/**
 * [ this function is used for content update  ]
 * we are replaceing the /v3/ to /v2/ because its been onboarded as content/v2/
 * we are replaceing the /action/ to /api/ because to redirect to service itself 
 * @param  {} [routes.API.CONTENT.UPDATE] This is the content update api route path
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */
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
/**
 * [ this function is used for channel read, content general interactions, framework read, composite search, getting languages  ]
 * we are replaceing the /v3/ to /v1/ because its been onboarded as /v1/
 * we are replaceing the /action/ to /api/ because to redirect to service itself 
 * @param  {} [routes.API.CHANNEL This is the channel read api route path
 * @param  {} routes.API.CONTENT.GENERAL This is the content general  api's route path
 * @param  {} routes.API.FRAMEWORK This is the framework read api route path
 * @param  {} routes.API.COMPOSITE This is the composit search api route path
 * @param  {} routes.API.LANGUAGE This is the language api route path
 * @param  {} ]
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */
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
/**
 * [ this function is used for generic action routes]
 * we are replaceing the /action/ to /api/ because to redirect to service itself 
 * @param  {} [routes.API.PREFIX.ACTION] This is the generic action/* api route path
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */
app.use([routes.API.PREFIX.ACTION], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      let originalUrl = req.originalUrl.replace("/action/", "/api/");
      return urlHelper.parse(originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);
/**
 * [ this function is used for generic assets and api routes path requests]
 * @param  {} [routes.API.PREFIX.ASSETS This is the generic asset api route path
 * @param  {} routes.API.PREFIX.API] This is the generic api route path
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */
app.use([routes.API.PREFIX.ASSETS, routes.API.PREFIX.API], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function (req) {
      return urlHelper.parse(req.originalUrl).path;
    },
    proxyReqOptDecorator: proxyUtils.decoratePublicRequestHeaders()
  })
);
/**
 * [ this function is used for general content preview, plugins, public assets, generic editor]
 * @param  {} [routes.API.GENERAL.CONTENT_PREVIEW This is the content preview api route path
 * @param  {} routes.API.GENERAL.CONTENT_PLUGINS This is the content plugins api route path
 * @param  {} routes.API.GENERAL.ASSET_PUBLIC This is the asset public api route path
 * @param  {} routes.API.GENERAL.GENERIC_EDITOR This is the generic editor api route path
 * @param  {} routes.API.GENERAL.CONTENT_EDITOR This is the content ediotor api route path
 * @param  {} ]
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */
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
