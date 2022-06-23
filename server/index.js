var express = require("express"),
  http = require("http");
(bodyParser = require("body-parser")),
  (proxy = require("express-http-proxy")),
  (urlHelper = require("url"));
const proxyUtils = require('./proxyUtils.js')
var envVariables =  require('./config/environment');
var BASE_URL = envVariables.BASE_URL;
var routes = require('./config/constants');
const uuid = require('uuid/v1');

var app = express();
app.set("port", 3000);
app.use(express.json());
app.use(express.static(process.cwd()+"/dist/"));

/**
 * @param  {} [routes.API.CONTENT.UPLOAD This is the content upload api url
 * @param  {} routes.API.CONTENT.UPLOAD_URL] This is the content upload api url
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
 * @param  {} routes.API.TELEMMETRY This is the telemetry api url
 * @param  {} {console.log(JSON.stringify(req.body) This is the logging of the request data
 * @param  {} ;res.status(200) Sending the response
 */
app.post(routes.API.TELEMMETRY, function (req, res) {
  console.log(JSON.stringify(req.body), 'telemetry logged');
  res.status(200).json({ message: "telemetry logged" })
});

/**
 * @param  {} routes.API.USER_SEARCH This is the user search api url
 * @param  {} res
 * @param  {} {res.status(200) Sending the api response
 * @param  {[]}} .json({users}) Sending empty array response
 */
app.post(routes.API.USER_SEARCH, function (req, res) {
  res.status(200).json({ users: [] })
});

/**
 * @param  {} routes.API.USER_ROLE This is the user role api url
 * @param  {} res
 * @param  {} {res.status(200) Sending the api response
 * @param  {[]}} .json({userRoles}) Sending array response
 */
 app.get(routes.API.USER_ROLE, function (req, res) {
  res.send({
    id: "api.v1.users",
    ver: "1.0",
    ts: new Date().toISOString(),
    params: {
      resmsgid: uuid(),
      msgid: uuid(),
      status: "successful",
      err: null,
      errmsg: null,
    },
    responseCode: "OK",
    result: {
      roles: envVariables.USER_ROLE
    }
  });
});

/**
 * @param  {} routes.API.USERS This is the user role api url
 * @param  {} res
 * @param  {} {res.status(200) Sending the api response
 * @param  {[]}} .json({userRoles}) Sending array response
 */
 app.post(routes.API.USERS, function (req, res) {
  let users = {};
  if (req.body.roleType === 'creator'){
    users = envVariables.CREATORS;
  }
  if (req.body.roleType === 'reviewer'){
    users = envVariables.REVIEWERS;
  }
  res.send({
    id: "api.v1.users",
    ver: "1.0",
    ts: new Date().toISOString(),
    params: {
      resmsgid: uuid(),
      msgid: uuid(),
      status: "successful",
      err: null,
      errmsg: null,
    },
    responseCode: "OK",
    result: {
      users
    }
  });
});

/**
 * @param  {} routes.API.CONTENT.COLLABORATOR_UPDATE This is the collaborator api url
 * @param  {} function(req
 * @param  {} res
 * @param  {} {res.status(200 Api response status
 * @param  {"Collabarationupdatesuccessful"}} .json({message}) Sending api response
 */
app.patch(routes.API.CONTENT.COLLABORATOR_UPDATE, function (req, res) {
  res.status(200).json({ message: "Collabaration update successful" })
});

/**
 * @param  {} routes.API.ASSESSMENT     This is the assessment api url
 * @param  {} routes.API.CONTENT.CREATE  This is the content create  api url
 * @param  {} routes.API.CONTENT.BUNDLE   This is the content bundle  api url
 * @param  {} routes.API.CONTENT.UNLISTED_PUBLISH This is the content unlist publish  api url
 * @param  {} routes.API.CONTENT.REVIEW_COMMENTS This is the content review comments  api url
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */
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

/**
 * @param  {} [routes.API.CONTENT.HIERARCHY] This is the content hierarchy api url
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
 * @param  {} [routes.API.BUNDLE This is the bundle api url
 * @param  {} routes.API.ITEMS_CREATE This is the items create api url
 * @param  {} routes.API.ITEMS_UPDATE This is the items update api url
 * @param  {} routes.API.CONTENT.UNLISTED_PUBLISH] This is the content unlisted publish api url
 * @param  {} proxy(BASE_URL
 * @param  {true} {https
 * @param  {function(req} proxyReqPathResolver
 */
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
