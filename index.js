const emailInput = document.getElementById('email');
const errorMsg = document.getElementsByClassName('errorMsg')[0];
const submitBtn = document.getElementById('submitBtn');
const dismissBtn = document.getElementById('dismissBtn');

const thanksMsg = document.getElementsByClassName('thanks-msg')[0];
const container = document.getElementsByClassName('container')[0];

emailInput.addEventListener('keyup', () => {
  if(emailInput.value == '') {
    errorMsg.classList.remove('show');
    emailInput.classList.remove('invalid');
    return;
  }
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const email = emailInput.value;
  if(regEx.test(email)) {
    errorMsg.classList.remove('show');
    emailInput.classList.remove('invalid');
  }
});

submitBtn.addEventListener('click', () => {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const email = emailInput.value;
  if(regEx.test(email)) {
    errorMsg.classList.remove('show');
    emailInput.classList.remove('invalid');
    container.classList.add('showOff');
    thanksMsg.classList.add('show');
  } else {
    errorMsg.classList.add('show');
    emailInput.classList.add('invalid');
  }
});

dismissBtn.addEventListener('click', () => {
  emailInput.value = '';
  container.classList.remove('showOff');
  thanksMsg.classList.remove('show');
});
