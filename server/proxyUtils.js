const envVariables = require('./config/environment');
const config = require('./config/constants');
const publicRequestHeaders = {
  authorization: `Bearer ${envVariables.API_AUTH_TOKEN}`,
  "x-authenticated-user-token": envVariables.USER_API_TOKEN,
  "x-channel-id": envVariables.CHANNEL_ID
};

const contentTypeHeaders = {
  'content-type': "application/json"
}

const decoratePublicRequestHeaders = function () {
  return function (proxyReqOpts, srcReq) {  
      if(srcReq.get('user-id')) {
        const userId = srcReq.get('user-id') === 'content-editor' ? config.defaultUserId : srcReq.get('user-id'); // TODO:: added this condition temp for lock API and have to make more dynamic (use header user-id and remove this condition) 
        proxyReqOpts.headers['x-authenticated-userid'] = userId;
      }    
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
