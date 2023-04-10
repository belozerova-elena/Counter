const myCounter = document.querySelector('#num');
const incBtn = document.querySelector('.inc');
const decBtn = document.querySelector('.dec');
const resetBtn = document.querySelector('.reset');

let counter = 0;

function increment() {
  counter++;
};
function decrement() {
  counter--;
};
function reset() {
  counter = 0;
};
function render() {
  myCounter.innerText = counter;
};

incBtn.addEventListener('click', () => {
  increment();
  render();
});
decBtn.addEventListener('click', () => {
  decrement();
  render();
});
resetBtn.addEventListener('click', () => {
  reset();
  render();
});