// list of Questions, Choices, and Answers
export const QUESTIONS = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
  title: "The condition in an if / else statement is enclosed within _____.",
  choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
  answer: "parentheses",},
  {title: "Arrays in JavaScript can be used to store _____.",
  choices: ["numbers & strings", "other arrays", "booleans", "all of the above"],
  answer: "all of the above",},
  {},
];

export const getSortedScores = () => {
  const scores = JSON.parse(localStorage.getItem("scores"))?.sort(
    (a, b) =>
    // Desending order
    b.score - a.score
  );
  return scores || [];
};

export const updateScores = (initials, newScore) => {
  const scores = getSortedScores();
  scores.push({ initials, score: newScore });
  localStorage.setItem("scores", JSON.stringify(scores));
};