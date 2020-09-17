import { getData } from './score';

function userscore(result) {
  for (let i = 0; i < result.sort().length; i += 1) {
    const temp = result;
    const n = 10;
    const maps = temp.map(item => `<p>${item.score}</p>`);
    return maps.slice(0, n);
  }
}

function username(result) {
  for (let i = 0; i < result.sort().length; i += 1) {
    const temp = result;
    const n = 10;
    const maps = temp.map(item => `<p>${item.user}</p>`);
    return maps.slice(0, n);
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

const scoreboard = document.querySelector('.top');

scoreboard.addEventListener('click', (e) => {
  e.preventDefault();
  const scorediv = document.querySelector('.scoreBoard');
  scorediv.classList.remove('hide');
  scoreboard.classList.add('hide')
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