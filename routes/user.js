const router = require('express').Router();
const bcrypt = require('bcrypt');
const authUser = require('../middlewares/authUser');
const { User } = require('../db/models');

router.get('/login', authUser, async (req, res) => {
  res.render('login');
});

router.get('/registration', authUser, async (req, res) => {
  res.render('registration');
});

router.post('/registration', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (name && email && password) {
    const hashPass = await bcrypt.hash(password, 10);
    try {
      const newUser = await User.create({
        username: name,
        email,
        password: hashPass,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.username,
      };

      return res.redirect('/home');
    } catch (err) {
      console.log('333333333');
      return res.redirect('/user/registration');
    }
  } else {
    console.log('4444444444444');
    return res.redirect('/user/registration');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const currentUser = await User.findOne({ where: { email: email } });
      if (
        currentUser &&
        (await bcrypt.compare(password, currentUser.password))
      ) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.username,
        };
        return res.redirect('/home');
      } else {
        return res.redirect('/user/login');
      }
    } catch (err) {
      return res.redirect('/user/login');
    }
  } else {
    return res.redirect('/user/login');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sId').redirect('/');
});

module.exports = router;
