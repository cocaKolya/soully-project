const $birthData = document.forms.birthData;
const $birthButton = document.querySelector('.birthdata-btn');
const $quizWrapper = document.querySelector('.quiz-wrapper');

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



let questionsAnswers = {};


function questionsStep(i) {
  if (i > 4) {
    const jsonQA = JSON.stringify(questionsAnswers);
    localStorage.setItem('questionsAnswers', jsonQA);
    console.log(
      '2local storage---->',
      localStorage.getItem('questionsAnswers')
    );
    return quizStep();
  }
  showFirstQuestion(i).then((id) => {
    const $questionForm = document.forms.questionForm;
    const $questionButton = document.querySelector('#question-button');
    $questionButton.addEventListener('click', (event) => {
      event.preventDefault();
      const answerId = Object.fromEntries(new FormData($questionForm));
      questionsAnswers[id] = answerId.group1;
      if (answerId.group1) {
        questionsStep(i + 1);
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


//
//
//
// localStorage.clear();
console.log('local storage---->', localStorage.getItem('birthData'));

//проверка наличия в сторадже данных из первого опросника про рождение
if (!localStorage.getItem('birthData')) {
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
  !localStorage.getItem('questionsData') &&
  localStorage.getItem('birthData')
) {
  questionsStep(0);
}
