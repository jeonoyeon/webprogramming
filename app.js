const greeting = document.querySelector('#greeting');
const helloButton = document.querySelector('#hello-button');
const darkButton = document.querySelector('#dark-button');
const countBox = document.querySelector('#count');
let count = 0;

const hour = new Date().getHours();
greeting.textContent = hour < 12
  ? '안녕하세요, 전오연님! 좋은 아침입니다.'
  : '안녕하세요, 전오연님! 좋은 오후입니다.';

function countUp() {
  count++;
  countBox.textContent = `클릭 ${count}회`;
}

helloButton.addEventListener('click', function () {
  greeting.textContent = '반갑습니다. 오늘도 좋은 하루 되세요.';
  countUp();
});

darkButton.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  countUp();
});
