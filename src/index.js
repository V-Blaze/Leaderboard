import './index.css';
import { createNewGame, addNewScore, getAllGameScores} from './module/utils';

const scoreForm = document.getElementById('score-form');
const refreshBtn = document.querySelector('.refresh-btn')

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let userInput = scoreForm.elements['user']
  let scoreInput = scoreForm.elements['score']

  const newScore = {
    "user": userInput.value,
    "score": Number(scoreInput.value)
  }

  addNewScore(newScore)

  userInput.value = ''
  scoreInput.value = ''

});

refreshBtn.addEventListener('click', getAllGameScores)


window.onload = () => {
  getAllGameScores()
}