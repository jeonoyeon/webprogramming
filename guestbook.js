const form = document.querySelector('#guestbook-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const notice = document.querySelector('#notice');
const entryList = document.querySelector('#entry-list');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  emailInput.value = email;

  if (name === '') {
    notice.textContent = '이름을 입력해주세요.';
    nameInput.focus();
    return;
  }
  if (email === '') {
    notice.textContent = '이메일을 입력해주세요.';
    emailInput.focus();
    return;
  }
  if (!emailInput.validity.valid) {
    notice.textContent = '이메일 주소를 확인해주세요.';
    emailInput.focus();
    return;
  }
  if (message === '') {
    notice.textContent = '메시지를 입력해주세요.';
    messageInput.focus();
    return;
  }

  const entry = document.createElement('li');
  entry.textContent = `${name}: ${message}`;
  entryList.prepend(entry);
  notice.textContent = '글을 남겼습니다.';
  form.reset();
  nameInput.focus();
});

nameInput.addEventListener('input', function () { notice.textContent = ''; });
emailInput.addEventListener('input', function () { notice.textContent = ''; });
messageInput.addEventListener('input', function () { notice.textContent = ''; });
