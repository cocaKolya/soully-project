const $birthData = document.forms.birthData;
const $birthButton = document.querySelector('.birthdata-btn');
const $quizWrapper = document.querySelector('.quiz-wrapper');
const $birthWrapper = document.querySelector('#birth-wrapper');

// узнает общее кол-во вопросов на выбор и по шкале 1-10
async function getAmoutOf() {
  const responseCount = await fetch(`/max`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const quizCount = await responseCount.json();
  return quizCount;
}
// разметка для вопросов на выбор
function showQuestions(data) {
  let arrOfAnswers = data.answers;
  result = '';
  for (let i = 0; i < arrOfAnswers.length; i++) {
    result += `<p>
        <input
          name='flexRadioDefault'
          id='flexRadioDefault1'
          type='radio'
          class='form-check-input'
          value='${arrOfAnswers[i].id}'
        />
        <label class='form-check-label' for='flexRadioDefault1'>
          ${arrOfAnswers[i].title}
        </label>
      </p>`;
  }
  return `<div class='container flex-row'>
  <form style="padding-left: 0px;" name='questionForm' class='form-check'>
    <h1>${data.title}</h1>
    <div class='radio-pad'>
      <div class='inside-div'>${result}
    </div>
      <button
      id="question-button"
        type='button'
        class='next-button btn btn-outline-light'
      >Next</button>
      </div>
  </form>
</div>`;
}
// разметка для вопросов по шкале 1-10
function showQuiz(data) {
  return `<div style='width: 700px;' class='container flex-row'>
  <form
    style='padding-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%'
    name='quizForm'
    class='form-check'
  >
    <h1>${data.title}</h1>
    <div class='radio-pad' style=' width: 100%;'>
      <div class='inside-div' style='width: 100%;'>
        <div
          style=' display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 10%;'
        >
          <span>1</span>
          <span style='padding-left: 12px;'>5</span>
          <span>10</span>
        </div>
        <input
          type='range'
          class='form-range'
          min='0'
          max='10'
          step='1'
          id='range-input'
        />
      </div>
      <button
        id='quiz-button'
        style='margin-top: 10%;'
        type='button'
        class='next-button btn btn-outline-light'
      >Next</button>
    </div>
  </form>
</div>`;
}
// достает из бд нужный вопрос
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
// достает из бд нужный вопрос по шкале 1-10
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
// рисует все вопросы по шкале 1-10 по очереди и записывает ответы, в конце объект ответов отправляет в localStorage
async function quizStep(count) {
  const { quizCount } = await getAmoutOf();
  if (count > quizCount - 1) {
    const jsonQA = JSON.stringify(quizAnswers);
    localStorage.setItem('quizAnswers', jsonQA);
    return (window.location = '/user/registration');
  }
  showFirstQuiz(count).then((id) => {
    const $quizButton = document.querySelector('#quiz-button');
    $quizButton.addEventListener('click', (event) => {
      event.preventDefault();
      const range = document.querySelector('#range-input');
      quizAnswers[id] = range.value;
      quizStep(count + 1);
    });
  });
}

let questionsAnswers = {};
// рисует все вопросы по очереди и записывает ответы, в конце объект ответов отправляет в localStorage
async function questionsStep(count) {
  const { questionCount } = await getAmoutOf();
  if (count > questionCount - 1) {
    const jsonQA = JSON.stringify(questionsAnswers);
    localStorage.setItem('questionsAnswers', jsonQA);
    return quizStep(0);
  }
  showFirstQuestion(count).then((questionId) => {
    const $questionForm = document.forms.questionForm;
    const $questionButton = document.querySelector('#question-button');
    $questionButton.addEventListener('click', (event) => {
      event.preventDefault();
      const answerId = Object.fromEntries(
        new FormData($questionForm)
      ).flexRadioDefault;
      questionsAnswers[questionId] = answerId;
      if (answerId) {
        questionsStep(count + 1);
      } else {
        const $errMessage = document.querySelector('#err-message');
        if (!$errMessage) {
          $questionForm.insertAdjacentHTML(
            'beforeend',
            '<p slyle="padding-top:10px" id="err-message"> choose answer</p>'
          );
        }
      }
    });
  });
}

// localStorage.clear();
//проверка наличия в сторадже данных из первого опросника про рождение
if (!localStorage.getItem('birthData')) {
  $birthWrapper.classList.remove('hidden');
  // $quizWrapper.innerHTML = showBirthData();
  $birthButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const myData = Object.fromEntries(new FormData($birthData));
    let { name, date, time, place } = myData;
    if ((name, date, time, place)) {
      const jsonData = JSON.stringify(myData);
      localStorage.setItem('birthData', jsonData);
      questionsStep(0);
    }
  });
}
// проверка наличия ответов на вопросы в сторадже
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
