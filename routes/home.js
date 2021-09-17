const router = require('express').Router();
const { userAnswers, lifeAnswers, BirthData } = require('../db/models');
const zodiac = require('zodiac-signs')();
const fetch = require('node-fetch');

router.get('/', (req, res) => {
  if (!req.session.user) res.redirect('/');
  res.render('home');
});

router.post('/', async (req, res) => {
  console.log('in home post');
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
      name: req.session.user.name,
      date: birthData.date,
      time: birthData.time,
      place: birthData.place,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.get('/horoscope', async (req, res) => {
  // const UserName =
  //   req.session.user.name.charAt(0).toUpperCase() +
  //   req.session.user.name.slice(1);
  // console.log(UserName);
  const user = await BirthData.findOne({
    where: { name: req.session.user.name },
  });
  console.log(user);
  const zodiacStyle = {
    day: `${user.date.slice(5, 7)}`,
    month: `${user.date.slice(8)}`,
  };
  console.log('----------------------------', zodiacStyle);
  const zodiacResult = zodiac.getSignByDate(zodiacStyle);
  let fetchDate = zodiacResult.name.toLowerCase();

  const response = await fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${fetchDate}&day=today`,
    {
      method: 'POST',
      headers: {
        'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'x-rapidapi-key': 'baf11a0859msh6a5696e2c0ea92dp1151a2jsnba6eaa4f911b',
      },
    }
  );
  const responseResult = await response.json();
  console.log(responseResult);
  console.log(fetchDate);
  responseResult.zodiacStyle = fetchDate;
  console.log(responseResult);
  res.json(responseResult);
});

module.exports = router;
