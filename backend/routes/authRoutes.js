const passport = require('passport');


module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    // app.get('/auth/google/callback', passport.authenticate('google'));

    app.get(
        '/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/auth/google'
        }),
        (req, res) =>
        res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user))
    );

    // app.get(
    //     '/auth/google/callback',
    //     passport.authenticate('google', {
    //         failureRedirect: '/auth/google'
    //     }),
    //     (req, res) =>
    //     res.send(req.user)
    // );

    // Set up Facebook auth routes
    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            failureRedirect: '/auth/facebook'
        }),
        // Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
        (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};
