const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt', { session: false });
const requiresSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'hello'})
  });
  app.post('/signin', requiresSignin, Authentication.signin);
  app.post('/signup', Authentication.signup)
}