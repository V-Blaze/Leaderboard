import './index.css';
import { createNewGame } from './module/utils';

const scoreForm = document.getElementById('score-form');

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

console.log(process.env.GAME_ID)

// let GameID = "JcadSBKP5ieYGYly4Jui"
// createNewGame()