// import './input.css';
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

  // console.log(currentQuestion.choices);
  currentQuestion.choices.forEach((choice) => {
    const li = document.createElement("li");
    // li.classList.add('text-gray-900', 'bg-white', 'border', 'border-gray-300', 'focus:outline-none', 'hover:bg-gray-100', 'focus:ring-4', 'focus:ring-gray-200', 'font-medium', 'rounded-full', 'text-xl', 'px-5', 'py-2.5', 'mr-2', 'mb-2', 'dark:bg-gray-800', 'dark:text-white', 'dark:border-gray-600', 'dark:hover:bg-gray-700', 'dark:hover:border-gray-600', 'dark:focus:ring-gray-700');

    li.innerHTML = `<button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">${choice}</button>`;
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
