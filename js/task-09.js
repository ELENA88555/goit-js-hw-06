function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color')


btnChangeColor.addEventListener('click', (event) => {
  const color = getRandomHexColor();
 document.body.style.backgroundColor = color;
nameColor.textContent = color;
})




