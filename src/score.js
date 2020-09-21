/* eslint-disable */
//import { highscore } from './dom';
require("regenerator-runtime/runtime");


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

const pushData = async (name, score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BulHvxB2vf6EwvbAg88l/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'same-origin',
  }).then((response) => {
    response.status;
    response.statusText;

    response.headers;
    response.url;
    return response.text();
  }).catch((error) => {
    error.message;
  });
};

const getData = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BulHvxB2vf6EwvbAg88l/scores/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'same-origin',
  }).then((response) => {
    response.json().then(data => {
      highscore(data.result);
    });
  }).catch((error) => {
    error.message;
    /* eslint-enable */
  });
};
export { getData, pushData, userscore, username };
