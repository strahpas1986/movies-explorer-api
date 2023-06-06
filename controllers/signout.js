const { SIGNOUT_MESSAGE } = require('../utils/constants');

module.exports.logout = (req, res) => {
  res.cookie('jwt', 'none', {
    maxAge: 5000,
    httpOnly: true,
    sameSite: true,
  });
  res.send({ message: SIGNOUT_MESSAGE });
};
