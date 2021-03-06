const passport = require('passport');

module.exports = app => {
  app.get('/greeting', (req, res) => {
    res.send({ hi: 'there' });
  });

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get(
    '/auth/qq',
    passport.authenticate('qq', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/qq/callback', passport.authenticate('qq'), (req, res) => {
    res.redirect('/home');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
