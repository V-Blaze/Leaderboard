import './index.css';
import { createNewGame, addNewScore } from './module/utils';

const scoreForm = document.getElementById('score-form');

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


// let GameID = "JcadSBKP5ieYGYly4Jui"
// createNewGame()