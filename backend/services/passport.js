const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

const transformFacebookProfile = (profile) => ({
    profileId: profile.id,
    name: profile.name,
    firstname: profile.first_name,
    lastname: profile.last_name,
    avatar: profile.picture.data.url,
});

// Transform Google profile into user object
const transformGoogleProfile = (profile) => ({
    profileId: profile.id,
    name: profile.displayName,
    firstname: profile.name.familyName,
    lastname: profile.name.givenName,
    avatar: profile.image.url,
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log(profile);
        // new User({googleId: profile.id}).save().then(user => done(null, user));
        console.log(profile);
        User.findOne({
                profileId: profile.id
            })
            .then((existingUser) => {
                if (existingUser) {

                    done(null, existingUser);
                } else {
                    new User(transformGoogleProfile(profile._json))
                        .save()
                        .then(user => done(null, user));
                }
            });


    }));

passport.use(new FacebookStrategy({
        clientID: keys.facebookClientID,
        clientSecret: keys.facebookClientSecret,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
    },
    (accessToken, refreshToken, profile, done)  => {

        User.findOne({
                profileId: profile.id
            })
            .then((existingUser) => {
                if (existingUser) {

                    done(null, existingUser);
                } else {
                    new User(transformFacebookProfile(profile._json))
                        .save()
                        .then(user => done(null, user));
                }
            });

        // console.log(profile._json);
        // done(null, transformFacebookProfile(profile._json));
    }
));
