const $birthData = document.forms.birthData;
const $button = document.querySelector('.birthdata-btn');
const $quizWrapper = document.querySelector('.quiz-wrapper');

console.log(localStorage.getItem('birthData'));
//проверка наличия в сторадже данных из первого опросника про рождение
if (!localStorage.getItem('birthData')) {
  $button.addEventListener('click', (event) => {
    event.preventDefault();
    const myData = Object.fromEntries(new FormData($birthData));
    let { name, date, time, place } = myData;
    if ((name, date, time, place)) {
      const jsonData = JSON.stringify(myData);
      localStorage.setItem('birthData', jsonData);
      // console.log(localStorage);
      // const a = localStorage.getItem('birthData');
      // console.log(a);
      $quizWrapper.innerHTML = showQuestions(dataFromBack)
    }
  });
} else if (!localStorage.getItem('questionsData')){

}
