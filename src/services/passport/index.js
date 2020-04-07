const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../../config/keys');

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
