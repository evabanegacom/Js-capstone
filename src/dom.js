/* eslint-disable */
import { getData } from './score';
const scoreboard = document.querySelector('.top');


scoreboard.addEventListener('click', (e) => {
  e.preventDefault();
  const scorediv = document.querySelector('.scoreBoard');
  scorediv.classList.remove('hide');
  scoreboard.classList.add('hide');
  getData();
});

function start() {
  const menudiv = document.querySelector('.menudiv');
  const scorediv = document.querySelector('.scoreBoard');
  scorediv.classList.add('hide');
  menudiv.classList.add('hide');
  const gamediv = document.querySelector('.gamediv');
  gamediv.classList.remove('hide');
}
export { start};