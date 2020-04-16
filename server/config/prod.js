module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  jwtSecret: process.env.JWT_SECRET_KEY,
  jwtSession: { session: false },
};
