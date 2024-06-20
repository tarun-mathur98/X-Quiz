// Sample data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;

let questionElement = document.getElementById("question");
let answerList = document.getElementById("answer-list");
let submitButton = document.getElementById("submit");
let nextButton = document.getElementById("next");

function renderQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.text;
  answerList.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<input type="radio" name="option" id="option${index}" value="${index}">
    <label for="option${index}">${option}</label>`;
    answerList.appendChild(listItem);
  });
  submitButton.style.display = 'inline-block';
  nextButton.style.display = 'none';

}

submitButton.addEventListener("click", () => {
  // Write the JS code that you want to be executed each time the Submit button is clicked.
  let formElements = document.querySelectorAll("input[name='option']");
  let selectedOption;

  formElements.forEach((element) => {
    if (element.checked) {
      selectedOption = element.value;
    }
  });

  if (selectedOption == undefined) {
    alert("Please select an answer!");
    return;
  }

  let correctOption = questions[currentQuestionIndex].correct;
  document.getElementById(
    `option${correctOption}`
  ).parentElement.style.background = "rgb(144, 238, 144)";

  if (parseInt(selectedOption) == correctOption) {
    score++;
  }

  submitButton.style.display = "none";
  nextButton.style.display = "inline-block";
});

nextButton.addEventListener("click", () => {
  // Write the JS code that you want to be executed each time the Next button is clicked.
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion();
  }
});

renderQuestion();
