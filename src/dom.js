import {getData} from './score';

function userscore(result){
  const scoreuser = (Object.values(result));
}

function highscore(result){
  const leadscore = document.querySelector('.topscores')
  const newdivscore = document.createElement('div')
  newdivscore.className = 'scoreDisplay'
  const newscore = document.createElement('p')
  newscore.innerHTML = (Object.values(result))
  const newuser = document.createElement('p')
  //console.log((Object.values(result)))
  //newuser.innerHTML = result.keys
  newdivscore.appendChild(newuser)
  newdivscore.appendChild(newscore)
  leadscore.appendChild(newdivscore)
}

const scoreboard = document.querySelector('.top')

scoreboard.addEventListener('click', (e) => {
  e.preventDefault();
  const scorediv = document.querySelector('.scoreBoard')
  scorediv.classList.remove('hide')
  getData()
})

function start() {
  const menudiv = document.querySelector('.menudiv');
  const scorediv = document.querySelector('.scoreBoard')
  scorediv.classList.add('hide')
  menudiv.classList.add('hide');
  const gamediv = document.querySelector('.gamediv');
  gamediv.classList.remove('hide');
}
export {start, highscore}