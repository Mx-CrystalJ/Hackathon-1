const correctSound = new Audio('assets/audio/correct-answer.mp3'); // Sound for correct answers
const incorrectSound = new Audio('assets/audio/incorrect-answer.mp3'); // Sound for incorrect answers
const questionSound = new Audio('assets/audio/question-sound.mp3'); // Sound for question display

// Preload sounds for faster playback
correctSound.preload = "auto";
incorrectSound.preload = "auto";

// Quiz questions and answers structure
const quizQuestions = [{
    question: "How did Spider-Man get his powers?",
    answers: [{
        text: "Radioactive spider bite",
        isCorrect: true
      }, // Correct answer
      {
        text: "Ketamine",
        isCorrect: false
      },
      {
        text: "Steroid injection",
        isCorrect: false
      }
    ]
  },
  {
    question: "Which character is from Toy Story?",
    answers: [{
        text: "Solid Snake",
        isCorrect: false
      },
      {
        text: "Batman",
        isCorrect: false
      },
      {
        text: "Buzz lightyear",
        isCorrect: true
      }
    ]
  },
  {
    question: "Which quote is the correct one?",
    answers: [{
        text: "Say hello to my large friend",
        isCorrect: false
      },
      {
        text: "Say hello to my little friend",
        isCorrect: true
      },
      {
        text: "Say bye bye to my little friend",
        isCorrect: false
      }
    ]
  },
  {
    question: "Which song is played in Frozen?",
    answers: [{
        text: "Let it go",
        isCorrect: true
      },
      {
        text: "Grieg: Peer Gynt Suite No. 1, Op. 46: I. Morning Mood",
        isCorrect: false
      },
      {
        text: "Be nice 2 me",
        isCorrect: false
      }
    ]
  },
  {
    question: "What is Spider-Man's real name?",
    answers: [{
        text: "Peter Parker",
        isCorrect: true
      },
      {
        text: "Yusuf Enes",
        isCorrect: false
      },
      {
        text: "Bruce Wayne",
        isCorrect: false
      }
    ]
  },
  {
    question: "Who gave Harry potter his scar?",
    answers: [{
        text: "His mom",
        isCorrect: false
      },
      {
        text: "Voldemort",
        isCorrect: true
      },
      {
        text: "Himself",
        isCorrect: false
      }
    ]
  },
  {
    question: "What did Gandalf say to the Balrog?",
    answers: [{
        text: "You shall pass",
        isCorrect: false
      },
      {
        text: "You will not pass",
        isCorrect: false
      },
      {
        text: "YOU SHALL NOT PASS!",
        isCorrect: true
      }
    ]
  },
  {
    question: "In the movie Ratatouille what animal controls the chef?",
    answers: [{
        text: "A gorilla",
        isCorrect: false
      },
      {
        text: "A mouse",
        isCorrect: false
      },
      {
        text: "A rat",
        isCorrect: true
      }
    ]
  },
  {
    question: "Which actor plays James Bond in the Casino Royale movie?",
    answers: [{
        text: "Daniel Wroughton Craig",
        isCorrect: true
      },
      {
        text: "James Bond",
        isCorrect: false
      },
      {
        text: "Hannibal Lecter",
        isCorrect: false
      }
    ]
  },
  {
    question: "spongebob est amicus?",
    answers: [{
        text: "Patrick",
        isCorrect: true
      },
      {
        text: "Plankton",
        isCorrect: false
      },
      {
        text: "Perry the platypus",
        isCorrect: false
      }
    ]
  },
  {
    question: "ナヴィ族（アバター）の肌の色は何色ですか?",
    answers: [{
        text: "آبی",
        isCorrect: true
      },
      {
        text: "розовый",
        isCorrect: false
      },
      {
        text: "mor",
        isCorrect: false
      }
    ]
  }
];

// Global variables
let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = 0;
let timerInterval;
let timeRemaining = 20; // 20 seconds for each question

// Function to display the current question
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;

  const answerButtons = document.getElementById('answer-buttons');
  answerButtons.innerHTML = ''; // Clear previous answer buttons

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.classList.add('answer-btn');
    button.textContent = answer.text;
    button.onclick = () => checkAnswer(index, button); // Pass the button to disable it
    answerButtons.appendChild(button);
  });

  // Start the timer when a new question is displayed
  startTimer();
}

// Function to start the timer
function startTimer() {
  // Reset time remaining
  timeRemaining = 20;
  document.getElementById('timer').textContent = `Time Remaining: ${timeRemaining} seconds`;

  // Clear any previous timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  // Update the timer every second
  timerInterval = setInterval(function () {
    timeRemaining--; // Decrease the time by 1 second
    document.getElementById('timer').textContent = `Time Remaining: ${timeRemaining} seconds`; // Update timer display

    // When the timer reaches 0, stop the timer. 
    if (timeRemaining <= 0) {
      clearInterval(timerInterval); // Stop the timer
      document.getElementById('result-message').textContent = "GAME OVER!";
      document.getElementById('next-question-btn').style.display = 'block'; // Show "Next Question" button
    }
  }, 1000); // Update every second (1000 ms)
}

function checkAnswer(index, button) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedAnswer = currentQuestion.answers[index];

  // Disable all buttons once an answer is selected
  const allButtons = document.querySelectorAll('.answer-btn');
  allButtons.forEach(btn => btn.disabled = true);

  // Provide feedback for the answer
  if (selectedAnswer.isCorrect) {
    score++;
    document.getElementById('result-message').textContent = "Correct!";
    correctSound.play(); // Play sound for correct answer
  } else {
    incorrectAnswers++;
    document.getElementById('result-message').textContent = "Incorrect!";
    incorrectSound.play(); // Play sound for incorrect answer
  }

  // Update the score display
  document.getElementById('score').textContent = score;
  document.getElementById('incorrect').textContent = incorrectAnswers;

  // Show "Next Question" button
  document.getElementById('next-question-btn').style.display = 'block';

  // Change the style of the clicked button
  if (selectedAnswer.isCorrect) {
    button.style.backgroundColor = 'green';
  } else {
    button.style.backgroundColor = 'red';
  }
}

// Function to move to the next question or show results at the end
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
    document.getElementById('result-message').textContent = ''; // Clear previous result
    document.getElementById('next-question-btn').style.display = 'none'; // Hide "Next Question" button
  } else {
    showResults();
  }
}

// Function to show the results
function showResults() {
  // Show the results area
  document.getElementById('results-area').style.display = 'block';

  // Display the score and answers in the results section
  document.getElementById('final-score').textContent = `Your Score: ${score}`;
  document.getElementById('correct-answers').textContent = `Correct Answers: ${score}`;
  document.getElementById('incorrect-answers').textContent = `Incorrect Answers: ${incorrectAnswers}`;

  // Hide the quiz container after the quiz ends
  document.getElementById('quiz-container').style.display = 'none';

  // Hide the timer when the quiz is over
  document.getElementById('timer').style.display = 'none';

  // Play the video (automatically)
  const video = document.getElementById('result-video');
  video.play(); // Starts the video when the results are shown
}

// Start the quiz
displayQuestion();