var OAuth2Server = require('oauth2-server');
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
