import { highScoreUL, resetBtn } from "./dom";
import { getSortedScores } from "./lib";

const scores = getSortedScores();

scores.forEach((score) => {
  const li = document.createElement("li");
  li.textContent = `${score.initials.toUpperCase()} - ${score.score}`;
  highScoreUL.appendChild(li);
})

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("scores");
  location.reload();
});