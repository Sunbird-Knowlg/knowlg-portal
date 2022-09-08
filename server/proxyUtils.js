const envVariables = require('./config/environment');
var publicRequestHeaders = {
  authorization: `Bearer ${envVariables.API_AUTH_TOKEN}`,
  "x-authenticated-user-token": envVariables.USER_API_TOKEN,
  "x-channel-id": envVariables.CHANNEL_ID,
  'x-authenticated-userid': "5a587cc1-e018-4859-a0a8-e842650b9d64" // TODO:: added temp for lock API and have to make more dynamic (use header user-id and remove this)
};

var contentTypeHeaders = {
  'content-type': "application/json"
}

const decoratePublicRequestHeaders = function () {
  return function (proxyReqOpts, srcReq) {      
      proxyReqOpts.headers = Object.assign({}, proxyReqOpts.headers, publicRequestHeaders, contentTypeHeaders);
      return proxyReqOpts;
  }
}

const customDecorateReqHeaders = function () {
  return function (proxyReqOpts, srcReq) {
      proxyReqOpts.headers = Object.assign({}, proxyReqOpts.headers, publicRequestHeaders);
      return proxyReqOpts;
  }
}

module.exports.decoratePublicRequestHeaders = decoratePublicRequestHeaders
module.exports.customDecorateReqHeaders = customDecorateReqHeaders
