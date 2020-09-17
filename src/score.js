import {highscore} from './dom'

const pushData = async (name, score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cCm80CLUyO7HIMn3WlTB/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: score,
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
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cCm80CLUyO7HIMn3WlTB/scores/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'same-origin',
  }).then((response) => {
    response.json().then(data => {
      highscore(data);
      console.log(data)
    })
  }).catch((error) => {
    error.message;
  });
};
export {getData, pushData}
