import { QUESTIONS, updateScores } from "./lib";

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
} from "./dom";

let TIME_LIMIT = 80;

let currentQuestionI = 0;

function handleclick(event) {
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

  location.reload();
}

// -------------------- Needs event inside funciton
function isCorrect(event) {
  let correct = ""
  if(event == answer) {
    correct = true
  } else {
    correct = false
  }
  choiceButton.addEventListener("click", selectAnswer);
}


function keepTime() {
  const intervalId = setInterval(() => {
    secondsP.textContent = TIME_LIMIT > 0 ? TIME_LIMIT : 0;

    // As long as we still have more questions and/or time, keep going
    if (currentQuestionI < QUESTIONS.length - 1 && TIME_LIMIT > 0) {
      TIME_LIMIT--;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

function renderEndScreen() {

}

function renderNxtQuestion() {
  const currentQuestion = QUESTIONS[currentQuestionI];

  quizH2.textContent = currentQuestion.title;
  quizList.innerHTML = "";

  currentQuestion.choices.forEach((choice) => {
    const li = document.createElement("li");

    li.innerHTML = `<button type="button" class="choice-button">${choice}</button>`;
    quizList.appendChild(li);
  })
}

function renderQuestionResult(result) {
  quizList.classList.add("hide")
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild
    (answerButtonElement.firstChild)
  }
}

function unmountQuestionResult() {

}

function init() {
  introP.classList.add("hidden");
  quiz.classList.remove("hidden");

  // Load first question - rest will be from 'handleClick
  renderNxtQuestion();

  keepTime();
}

quiz.addEventListener("click", handleclick);
startButton.addEventListener("click", init);

form.addEventListener("submit", handleSubmit);