const passport = require('passport');
const passportJWT = require('passport-jwt');
const keys = require('../../../config/keys');

const { ExtractJwt } = passportJWT;
const { Strategy } = passportJWT;

const params = {
  secretOrKey: keys.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('auth'),
};

module.exports = () => {
  const strategy = new Strategy(params, (payload, done) => {
    const user = payload;

    if (!user) {
      return done(new Error('User not found'), null);
    }

    return done(null, user);
  });

  passport.use(strategy);

  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate('jwt', keys.jwtSession);
    },
  };
};
