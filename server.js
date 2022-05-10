var express = require('express'),
http = require('http');
bodyParser = require('body-parser'),
proxy = require('express-http-proxy'),
urlHelper = require('url');

// ENV Variables
const BASE_URL = 'dock.sunbirded.org';
const API_AUTH_TOKEN = "";
const PORTAL_COOKIES= "";
const USER_TOKEN = "";

var app = express();
app.set('port', 3000);
app.use(express.json())

app.use(['/content/preview/*', '/content-plugins/*', '/assets/public/*'], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function(req) {
        return require('url').parse(`https://${BASE_URL}` + req.originalUrl).path
    },
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
        // you can update headers
        proxyReqOpts.headers['Content-Type'] = 'application/json';
        proxyReqOpts.headers['user-id'] = 'content-editor';
        proxyReqOpts.headers['Cookie'] = PORTAL_COOKIES;
        proxyReqOpts.headers['authorization'] = `Bearer ${API_AUTH_TOKEN}`;
        return proxyReqOpts;
    }
}));
http.createServer(app).listen(app.get('port'), 3000);
