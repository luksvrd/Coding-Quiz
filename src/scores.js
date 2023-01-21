import { highScoreUL, resetBtn } from "./dom.js";
import { getSortedScores } from "./lib.js";

const scores = getSortedScores();

scores.forEach((score) => {
  const li = document.createElement("li");
  li.textContent = `${score.initials.toUpperCase()} - ${score.score}`;
  highScoreUL.appendChild(li);
});

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("scores");
  location.reload();
});