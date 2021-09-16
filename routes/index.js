const express = require('express');
const router = express.Router();
const { questions, answers } = require('../db/models');
router.get('/', function (req, res) {
  res.render('index');
});

module.exports = router;

router.get('/question/:id', async function (req, res) {
  let nextQuestion = await questions.findOne({
    order: [['id']],
    include: [
      {
        model: answers,
      },
    ],
    offset: req.params.id
  });
  res.json(nextQuestion);
});

router.post('/question/next', async function (req, res) {
  let nextCar = await questions.findAll({
    order: [['id']],
    offset: req.body.count,
    limit: 1,
  });
  if (!nextCar.length) {
    return res.sendStatus(404);
  } else {
    res.json(nextCar);
  }
});
