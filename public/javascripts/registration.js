const $regBtn = document.querySelector('#registration-btn');
const $regForm = document.forms.regForm;

const questionsAnswers = JSON.parse(localStorage.getItem('questionsAnswers'));
const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
const birthData = JSON.parse(localStorage.getItem('birthData'));

if (!(questionsAnswers, quizAnswers, birthData)) window.location = '/';
$regBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const myData = Object.fromEntries(new FormData($regForm));

  const response = await fetch(`/user/registration`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(myData),
  });
  if (response.ok) {
    window.location = '/home';
  } else {
    console.log(error);
  }
});
