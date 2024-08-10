const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      a: "<Ib>",
      b: "<break>",
      c: "<br>",
      d: "none of the above",
      correct: "c",
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      a: "Both the <head> section and the <body> section are correct  ",
      b: "The <head> section",
      c: "The <body> section",
      d: "The <meta> section",
      correct: "a",
    },
    {
      question: "Which CSS property controls the text size?",
      a: "font-style",
      b: "text-style",
      c: "font-size",
      d: "text-size",
      correct: "c",
    },
    {
      question: "What is the correct command to create a new React project?",
      a: "npm create-react-app myReactApp",
      b: "npx create-react-app myReactApp",
      c: "npx create-react-app",
      d: "npm create-react-app",
      correct: "b",
    },
    {
      question: "what is the default local host port that a React development server uses",
      a: "3000",
      b: "3500",
      c: "5000",
      d: "8080",
      correct: "a",
    },
    {
      question: "choose the correct HTML element for the largest heading:",
      a: "<heading>",
      b: "<head>",
      c: "<h6>",
      d: "<h1>",
      correct: "d",
    }, 


  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
      }
    }
  });