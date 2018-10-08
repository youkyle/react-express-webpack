const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model

const User = require('../models/User');
const settings = require('../config/settings');

module.exports = (passport) => {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = settings.secret;
  passport.use(new JwtStrategy(opts, ((jwtPayload, done) => {
    User.findOne({ _id: jwtPayload._id }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  })));
};
