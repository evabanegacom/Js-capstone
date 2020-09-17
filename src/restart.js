import { pushData } from './score';

const forminput = document.getElementById('name');
const container = document.querySelector('.score-container');
const namealert = document.querySelector('.nameEntry');

function buttonfunction(score) {
  if (forminput.value.length === 0) {
    namealert.innerHTML = 'name is required';
  } else {
    const scorediv = document.createElement('div');
    scorediv.className = 'score';
    const scores = document.createElement('div');
    scores.innerHTML = score;
    const names = document.createElement('div');
    names.innerHTML = forminput.value;
    scorediv.appendChild(names);
    scorediv.appendChild(scores);
    container.appendChild(scorediv);
    pushData(forminput.value, score);
    namealert.innerHTML = 'score updated';
  }
}
export default buttonfunction;