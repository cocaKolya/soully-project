function authUser(req, res, next) {
  if (req.session.user) {
    return res.redirect('/home');
  }
  next();
}

module.exports = authUser;
