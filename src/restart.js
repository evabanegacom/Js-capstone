import {pushData} from './score';

const forminput = document.getElementById('name');
const container = document.querySelector('.score-container');


function buttonfunction(score) {
  const scorediv = document.createElement('div');
  scorediv.className = 'score';
  const scores = document.createElement('div');
  scores.innerHTML = score;
  const names = document.createElement('div');
  names.innerHTML = forminput.value;
  if(forminput.value.length === 0){
    alert('name is required')
  }else{
    pushData(forminput.value, score);
    alert('score updated')
  }
  scorediv.appendChild(names);
  scorediv.appendChild(scores);
  container.appendChild(scorediv);
}
export default buttonfunction;