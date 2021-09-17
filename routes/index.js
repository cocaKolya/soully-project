const express = require('express');
const router = express.Router();
const { questions, answers, lifeQuestions } = require('../db/models');

router.get('/', function (req, res) {
  if (req.session.user) res.redirect('/home');
  res.render('index');
});

module.exports = router;

router.get('/question/:count', async function (req, res) {
  let nextQuestion = await questions.findOne({
    order: [['id']],
    include: [
      {
        model: answers,
      },
    ],
    offset: req.params.count,
  });
  res.json(nextQuestion);
});

router.get('/max', async function (req, res) {
  let quizCount = await lifeQuestions.count();
  console.log(quizCount);
  let questionCount = await questions.count();
  res.json({ quizCount, questionCount });
});

router.get('/quiz/:count', async function (req, res) {
  let nextQuiz = await lifeQuestions.findOne({
    order: [['id']],
    offset: req.params.count,
  });
  res.json(nextQuiz);
});
