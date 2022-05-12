var express = require('express'),
http = require('http');
proxy = require('express-http-proxy');
const env = process.env

// ENV Variables
const BASE_URL = env.base_url || 'dock.sunbirded.org';

var app = express();
app.set('port', 3000);
app.use(express.json())

app.use(['/content/preview/*', '/content-plugins/*', '/assets/public/*'], proxy(BASE_URL, {
    https: true,
    proxyReqPathResolver: function(req) {
        return require('url').parse(`https://${BASE_URL}` + req.originalUrl).path
    },
    proxyReqOptDecorator: function(proxyReqOpts) {
        proxyReqOpts.headers['Content-Type'] = 'application/json';
        proxyReqOpts.headers['user-id'] = 'content-player';
        return proxyReqOpts;
    }
}));
http.createServer(app).listen(app.get('port'), 3000);
