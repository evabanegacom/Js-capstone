const startgame = document.querySelector('.start');


function start() {
  const menudiv = document.querySelector('.menudiv');
  menudiv.classList.add('hide');
  const gamediv = document.querySelector('.gamediv');
  gamediv.classList.remove('hide');
}

export default start;