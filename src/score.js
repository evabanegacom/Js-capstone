/* eslint-disable */
import { highscore } from './dom';

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
export { getData, pushData };
