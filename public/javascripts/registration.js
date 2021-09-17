const $regBtn = document.querySelector('#registration-btn');
const $regForm = document.forms.regForm;
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
    console.log('vse kaef');
  }
});
