
const btnDecr = document.querySelector('#counter [data-action="decrement"]')
const btnIncr = document.querySelector('#counter [data-action="increment"]')
const counterSpan = document.querySelector('#value')

let counterValue = 0;

btnDecr.addEventListener('click', () => {
  counterValue -= 1;
  counterSpan.textContent = counterValue
}) 

btnIncr.addEventListener('click', () => {
  counterValue += 1;
  counterSpan.textContent = counterValue
}) 

