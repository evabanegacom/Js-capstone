/* eslint-disable */
import { getData } from './score';
const scoreboard = document.querySelector('.top');

function userscore(result) {
  for (let i = 0; i < result.sort((a, b) => b.score - a.score).length; i += 1) {
    const n = 10;
    const temp = result.slice(0, n);
    const maps = temp.map(item => `<p>${item.score}</p>`);
    return maps.join('');
  }
}

function username(result) {
  for (let i = 0; i < result.sort((a, b) => b.score - a.score).length; i += 1) {
    const n = 10;
    /* eslint-enable */
    const temp = result.slice(0, n);
    const maps = temp.map(item => `<p>${item.user}</p>`);
    const arra = maps.join('');
    return arra;
  }
}

function highscore(result) {
  const leadscore = document.querySelector('.topscores');
  const newdivscore = document.createElement('div');
  newdivscore.className = 'scoreDisplay';
  const newscore = document.createElement('p');
  newscore.innerHTML = userscore(result);
  const newuser = document.createElement('p');
  newuser.innerHTML = username(result);
  newdivscore.appendChild(newuser);
  newdivscore.appendChild(newscore);
  leadscore.appendChild(newdivscore);
}

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
export { start, highscore };