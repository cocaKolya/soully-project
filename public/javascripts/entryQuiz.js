const $birthData = document.forms.birthData;
const $birthButton = document.querySelector('.birthdata-btn');
const $quizWrapper = document.querySelector('.quiz-wrapper');
const $birthWrapper = document.querySelector('#birth-wrapper');

// console.log(req.session.user);
// if (res.locals.user) window.location = '/home';

async function getAmoutOf() {
  const responseCount = await fetch(`/max`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const quizCount = await responseCount.json();
  console.log(quizCount);
  return quizCount;
}

function showQuestions(data) {
  let arrOfAnswers = data.answers;
  result = '';
  for (let i = 0; i < arrOfAnswers.length; i++) {
    result += `<p>
      <label>
      <input name="group1" type="radio" class="inputAnswer" value='${arrOfAnswers[i].id}'/>
      <span>${arrOfAnswers[i].title}</span>
      </label>
      </p>`;
  }
  return `<div class="row-question color-black">
    <form name="questionForm" >
    <h2>${data.title}</h2>${result}
    <button
    id='question-button'
    class='question-btn waves-effect waves-light btn-large'
    name='btn'
    >Send</button>
    </form>
    </div>`;
}

function showQuiz(data) {
  return `<div class='row'>
  <form class='col s12' name="quizForm">
      <div class='row'>
        <h2>${data.title}</h2>
        <p id='test-slider'class='range-field'>
          <input type='range' id='test5' min='0' max='10' />
        </p>
      </div>

    <button
      id='quiz-button'
      class='waves-effect waves-light btn-large'
    >NEXT</button>

  </form>
</div>`;
}
//
//
//

async function showFirstQuestion(count) {
  const response = await fetch(`/question/${count}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const dataFromBack = await response.json();
    $quizWrapper.innerHTML = showQuestions(dataFromBack);
    return dataFromBack.id;
  }
}
//
//
////////////////-------------------------.>>>>>>>>>>>>>
async function showFirstQuiz(count) {
  const response = await fetch(`/quiz/${count}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const dataFromBack = await response.json();
    $quizWrapper.innerHTML = showQuiz(dataFromBack);
    return dataFromBack.id;
  }
}

let quizAnswers = {};

async function quizStep(count) {
  const { quizCount } = await getAmoutOf();
  if (count > quizCount - 1) {
    const jsonQA = JSON.stringify(quizAnswers);
    localStorage.setItem('quizAnswers', jsonQA);
    console.log('3local storage---->', localStorage.getItem('quizAnswers'));
    return (window.location = '/user/registration');
  }
  showFirstQuiz(count).then((id) => {
    const $quizButton = document.querySelector('#quiz-button');
    $quizButton.addEventListener('click', (event) => {
      event.preventDefault();
      const range = document.querySelector('#test5');
      console.log('--->>>', range.value);
      quizAnswers[id] = range.value;
      quizStep(count + 1);
    });
  });
}
//
//
//
//

let questionsAnswers = {};

async function questionsStep(count) {
  const { questionCount } = await getAmoutOf();
  if (count > questionCount - 1) {
    const jsonQA = JSON.stringify(questionsAnswers);
    localStorage.setItem('questionsAnswers', jsonQA);
    console.log(
      '2local storage---->',
      localStorage.getItem('questionsAnswers')
    );
    return quizStep(0);
  }
  showFirstQuestion(count).then((questionId) => {
    const $questionForm = document.forms.questionForm;
    const $questionButton = document.querySelector('#question-button');
    $questionButton.addEventListener('click', (event) => {
      event.preventDefault();
      const answerId = Object.fromEntries(new FormData($questionForm));
      questionsAnswers[questionId] = answerId.group1;
      if (answerId.group1) {
        questionsStep(count + 1);
      } else {
        const $errMessage = document.querySelector('#err-message');
        if (!$errMessage) {
          $questionForm.insertAdjacentHTML(
            'afterend',
            '<p id="err-message"> выбери ответ!</p>'
          );
        }
      }
    });
  });
}
//////////////////////<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//
//
//
// localStorage.clear();
console.log('local storage---->', localStorage.getItem('birthData'));
console.log('local storage---->', localStorage.getItem('questionsAnswers'));
console.log('local storage---->', localStorage.getItem('quizAnswers'));
//проверка наличия в сторадже данных из первого опросника про рождение
if (!localStorage.getItem('birthData')) {
  $birthWrapper.classList.remove('hidden');
  // $quizWrapper.innerHTML = showBirthData();
  $birthButton.addEventListener('click', async (event) => {
    console.log('knopka');
    event.preventDefault();
    const myData = Object.fromEntries(new FormData($birthData));
    let { name, date, time, place } = myData;
    if ((name, date, time, place)) {
      const jsonData = JSON.stringify(myData);
      localStorage.setItem('birthData', jsonData);
      console.log(
        'inside local storage---->',
        localStorage.getItem('birthData')
      );
      questionsStep(0);
    }
  });
}
if (
  !localStorage.getItem('questionsAnswers') &&
  localStorage.getItem('birthData')
) {
  questionsStep(0);
}

if (
  !localStorage.getItem('quizAnswers') &&
  localStorage.getItem('questionsAnswers')
) {
  quizStep(0);
}

if (localStorage.getItem('quizAnswers')) {
  window.location = '/user/registration';
}
