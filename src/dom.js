export const form = document.querySelector("form");
export const highScoreUL = document.querySelector("#high-scores")
export const introP = document.querySelector("#intro");
//  This ? is a non conditional, it says if this is null, then return null
// Tell coomputer dont worry about running it bc it would crash the program
export const quiz = document.getElementById("quiz");
export const quizP = quiz?.querySelector("#quiz p");
export const quizH2 = quiz?.querySelector("#quiz h2");
export const quizList = quiz?.querySelector("#quiz ul");

export const resetBtn = document.querySelector("#button [type='reset']");

export const secondsP = document.getElementById("seconds");
export const startButton = document.getElementById("start-quiz");

export const results = document.getElementById("results");
export const resultsSpan = results?.querySelector("#results span")
