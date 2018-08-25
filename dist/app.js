var OAuth2Server = require('oauth2-server');
var ARequest = require('oauth2-server').Request;
var oauth = new OAuth2Server({
    model: require('./model'),
    allowBearerTokensInQueryString: true,
    accessTokenLifetime: 4 * 60 * 60
});
function authenticateHandler(options) {
    return function (req, res, next) {
        var request = new Request(req);
        var response = new Response(res);
        return oauth.authenticate(request, response, options)
            .then(function (token) {
            res.locals.oauth = { token: token };
            next();
        })
            .catch(function (err) {
            // handle error condition
        });
    };
}
function authorizeHandler(options) {
    return function (req, res, next) {
        var request = new Request(req);
        var response = new Response(res);
        return oauth.authorize(request, response, options)
            .then(function (code) {
            res.locals.oauth = { code: code };
            next();
        })
            .catch(function (err) {
            // handle error condition
        });
    };
}
function tokenHandler(options) {
    return function (req, res, next) {
        var request = new Request(req);
        var response = new Response(res);
        return oauth.token(request, response, options)
            .then(function (token) {
            res.locals.oauth = { token: token };
            next();
        })
            .catch(function (err) {
            // handle error condition
        });
    };
}
