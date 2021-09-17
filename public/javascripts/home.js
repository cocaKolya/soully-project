const questionsAnswers = JSON.parse(localStorage.getItem('questionsAnswers'));
const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
const birthData = JSON.parse(localStorage.getItem('birthData'));

async function localStorageToDb() {
  const responseCount = await fetch(`/home`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ questionsAnswers, quizAnswers, birthData }),
  });
}

console.log(questionsAnswers);
console.log(quizAnswers);
console.log(birthData);
if ((questionsAnswers, quizAnswers, birthData)) {
  localStorageToDb();
  localStorage.clear();
}
