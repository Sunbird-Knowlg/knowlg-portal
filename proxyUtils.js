
const decoratePrivateRequestHeaders = function () {
  return function (proxyReqOpts, srcReq) {
    proxyReqOpts.headers["Content-Type"] = "application/json";
      proxyReqOpts.headers["user-id"] = USER_ID;
      proxyReqOpts.headers.authorization = `Bearer ${API_AUTH_TOKEN}`;
      proxyReqOpts.headers["x-authenticated-user-token"] = USER_TOKEN;
      proxyReqOpts.headers["x-channel-id"] = CHANNEL_ID;
      return proxyReqOpts;
  }
}

const decoratePublicRequestHeaders = function () {
  return function (proxyReqOpts, srcReq) {
    proxyReqOpts.headers["Content-Type"] = "application/json";
    proxyReqOpts.headers["user-id"] = USER_ID;
    proxyReqOpts.headers.authorization = `Bearer ${API_AUTH_TOKEN}`
    return proxyReqOpts
  }
}

module.exports.decoratePrivateRequestHeaders = decoratePrivateRequestHeaders
module.exports.decoratePublicRequestHeaders = decoratePublicRequestHeaders