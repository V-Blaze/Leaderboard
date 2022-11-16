import './index.css';
import { addNewScore, getAllGameScores } from './module/utils.js';

const scoreForm = document.getElementById('score-form');
const refreshBtn = document.querySelector('.refresh-btn');

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = scoreForm.elements.user;
  const scoreInput = scoreForm.elements.score;

  const newScore = {
    user: userInput.value,
    score: Number(scoreInput.value),
  };

  addNewScore(newScore);

  userInput.value = '';
  scoreInput.value = '';
});

refreshBtn.addEventListener('click', getAllGameScores);

window.onload = () => {
  getAllGameScores();
};