const findUserById = require('./findUserById');
const singUpUser = require('./signUp');
const login = require('./login');

const singInOrLogin = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await findUserById(profile.id);

  if (existingUser) {
    return login(existingUser, done);
  }

  return singUpUser(profile, done);
};

module.exports = singInOrLogin;
