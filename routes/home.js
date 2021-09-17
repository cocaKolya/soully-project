const router = require('express').Router();
const { userAnswers, lifeAnswers, BirthData } = require('../db/models');

router.get('/', (req, res) => {
  if (!req.session.user) res.redirect('/');
  res.render('home');
});

router.post('/', async (req, res) => {
  try {
    let { quizAnswers, questionsAnswers, birthData } = req.body;
    console.log(questionsAnswers);
    for (const key in questionsAnswers) {
      await userAnswers.create({
        userId: req.session.user.id,
        questionId: key,
        answerId: questionsAnswers[key],
      });
    }
    for (const key in quizAnswers) {
      await lifeAnswers.create({
        userId: req.session.user.id,
        questionId: key,
        answer: quizAnswers[key],
      });
    }
    await BirthData.create({
      name: birthData.name,
      date: birthData.date,
      time: birthData.time,
      place: birthData.place,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
