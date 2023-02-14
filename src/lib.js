// list of Questions, Choices, and Answers
export const QUESTIONS = [
  {
    // this goes in the <h2> element
    title: "Commonly used data types DO NOT include:",
    // This will go in the <li> elements
    choices: ["strings", "booleans", "alerts", "numbers"],
    // This is the correct answer
    answer: "alerts",
  },

  {
    title: "The condition in an if / else statement is enclosed within _____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },

  {
    title: "What does a for loop do?",
    choices: [
      "exacutes a block of code only if a specified conditon is true",
      "return a random value",
      "exacutes a block of code when an if statment returns false",
      "repeats a line of code a certain number of times based on set a parameter",
    ],
    answer:
      "Repeats a line of code a certain number of times based on set a parameter",
  },

  {
    title: "An if statement checks a _____ value",
    choices: ["undefined", "NULL", "number", "boolean"],
    answer: "boolean",
  },

  {
    title: "Arrays in JavaScript can be used to store _____.",
    choices: [
      "numbers & strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
];

export const getSortedScores = () => {
  const scores =
    // Parse JSON form localStorage into a JavaScript object (array)
    // Using optional chaining to avoid an error if the key doesn't exist
    JSON.parse(localStorage.getItem("scores"))?.sort(
      (a, b) =>
        // Desending order
        b.score - a.score
    );
  // Logical OR shortcircuiting - If there are no scores, return an empty array
  return scores || [];
};

export const updateScores = (initials, newScore) => {
  const scores = getSortedScores();
  scores.push({ initials, score: newScore });
  localStorage.setItem("scores", JSON.stringify(scores));
};
