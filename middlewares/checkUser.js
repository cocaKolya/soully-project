function checkUser(req, res, next) {
  if (req.session.user) {
    res.locals.user = req.session.user;
  }
  console.log(res.locals.user);
  next();
}

module.exports = checkUser;
