import score from '../src/index.js'
import pushData from '../src/score.js'
//import getData from '../src/score.js'

const forminput = document.getElementById('name');
const container = document.querySelector('.score-container');


function buttonfunction(){
  const scorediv = document.createElement('div');
  scorediv.className = 'score';
  const scores = document.createElement('div');
  scores.innerHTML = score;
  const names = document.createElement('div');
  names.innerHTML = forminput.value;
  pushData();

  scorediv.appendChild(names);
  scorediv.appendChild(scores);
  container.appendChild(scorediv);
}
export default buttonfunction;