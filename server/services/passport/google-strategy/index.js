const passport = require('passport');
const PassportGoogleOauth2 = require('passport-google-oauth20');

const GoogleStrategy = PassportGoogleOauth2.Strategy;

const keys = require('../../../config/keys');

const serializeUser = require('./serializeUser');
const deserializeUser = require('./deserializeUser');
const signUpOrLoginUser = require('./signUpOrLogin');

passport.serializeUser(serializeUser);

passport.deserializeUser(deserializeUser);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.callbackURL,
    },
    signUpOrLoginUser
  )
);
