const questionsAnswers = JSON.parse(localStorage.getItem('questionsAnswers'));
const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
const birthData = JSON.parse(localStorage.getItem('birthData'));
const $horoWrapper = document.querySelector('.grafic');

function showHoroscope(data) {
  return `<div class='horo'>
  <h1 class='head-h border-bott'>${data.zodiacStyle} horoscope, ${data.current_date}</h1>
  <p> compatibility: ${data.compatibility}</p>
      <p>description: ${data.description}</p>
        <p> mood: ${data.mood}</p>
        <p> color: ${data.color}</p>
        <p> lucky number: ${data.lucky_number}</p>
        <p> lucky time: ${data.lucky_time}</p>
      </div>`;
}

async function localStorageToDb() {
  const responseCount = await fetch(`/home`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ questionsAnswers, quizAnswers, birthData }),
  });
  console.log(responseCount);
  return responseCount;
}

console.log(questionsAnswers);
console.log(quizAnswers);
console.log(birthData);
async function check() {
  if ((questionsAnswers, quizAnswers, birthData)) {
    await localStorageToDb();
    localStorage.clear();
  }
  showHoro();
}
check();

const data = {
  labels: [
    'enjoyment',
    'resilience ',
    'balance',
    'self-actualization',
    'flexibility',
  ],
  datasets: [
    {
      label: 'current info',
      data: [80, 88, 56, 88, 100],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'prev info',
      data: [65, 29, 90, 81, 76],
      fill: true,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      pointBackgroundColor: 'rgba(255, 255, 255, 0.5)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
    },
  ],
};

const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  },
};

const myChart = new Chart(document.getElementById('myChart'), config);

async function showHoro() {
  const response = await fetch('/home/horoscope');
  if (response.ok) {
    const dataFromBack = await response.json();

    $horoWrapper.insertAdjacentHTML('afterend', showHoroscope(dataFromBack));
  } else {
    console.log('pizda baze tvoey');
  }
}
