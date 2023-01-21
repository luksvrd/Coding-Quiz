import { QUESTIONS, updateScores } from "./lib.js";

import {
  form,
  introP,
  quiz,
  quizH2,
  quizList,
  quizP,
  results,
  resultsSpan,
  secondsP,
  startButton,
} from "./dom.js";

let TIME_LIMIT = 80;

let currentQuestionI = 0;

function handleClick(event) {
  const isCorrectAnswer = isCorrect(event);

  renderQuestionResult(isCorrectAnswer);
  if(!isCorrectAnswer) {
    TIME_LIMIT -= 10;
  }

  if (currentQuestionI < QUESTIONS.length - 1) {
    currentQuestionI++;
    renderNxtQuestion();
  } else {
    renderEndScreen();
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const initials = event.target.elements.initials.value;

  updateScores(initials, TIME_LIMIT);

  // Reloads the page
  location.reload();
}

function isCorrect(event) {
  const choice = event.target;
  const correct = QUESTIONS[currentQuestionI].answer;

  if (choice.textContent === correct) return true;

  return false;
}

function keepTime() {
  const intervalId = setInterval(() => {
    // if time is grater than 0, show time
    // keeps time from going to zero
    secondsP.textContent = TIME_LIMIT > 0 ? TIME_LIMIT : 0;

    // As long as we still have more questions and/or time, keep going
    if (currentQuestionI < QUESTIONS.length - 1 && TIME_LIMIT > 0) {
      TIME_LIMIT--;
    } else {
      // otherwise get rid of timer bc game is over
      clearInterval(intervalId);
    }
    // 1000 means this funciton will be called every second
  }, 1000);
}

function renderEndScreen() {
  quiz.classList.add("hidden");
  resultsSpan.textContent = TIME_LIMIT;
  results.classList.remove("hidden");
}

function renderNxtQuestion() {
  const currentQuestion = QUESTIONS[currentQuestionI];

  quizH2.textContent = currentQuestion.title;
  quizList.innerHTML = "";

  currentQuestion.choices.forEach((choice) => {
    const li = document.createElement("li");

    li.innerHTML = `<button type="button">${choice}</button>`;
    quizList.appendChild(li);
  });
}

function renderQuestionResult(results) {
  quizP.classList.toggle("hidden");

  if (results) {
    quizP.classList.add("border-green-500", "text-green-500");
    quizP.textContent = "Correct!";

  } else {
    quizP.classList.add("border-red-500", "text-red-500");
    quizP.textContent = "Wrong!";
  }
}


function unmountQuestionResult() {
  quizP.classList.remove("border-green-500", "text-green-500");
  quizP.classList.remove("border-red-500", "text-red-500");
  quizP.classList.add("hidden");
}

function init() {
  // Hide the intoP and show quiz
  introP.classList.add("hidden");
  quiz.classList.remove("hidden");

  // Load first question - rest will be from 'handleClick
  renderNxtQuestion();

  keepTime();
}

quiz.addEventListener("click", handleClick);
startButton.addEventListener("click", init);

form.addEventListener("submit", handleSubmit);
