// Quiz questions and answers structure
const quizQuestions = [
    {
      question: "How did Spider-Man get his powers?",
      answers: [
        { text: "Radioactive spider bite", isCorrect: true },  // Correct answer
        { text: "Ketamine", isCorrect: false },
        { text: "Steroid injection", isCorrect: false }
      ]
    },
    {
      question: "Who is the villain in the first Spider-Man movie?",
      answers: [
        { text: "Green Goblin", isCorrect: true },
        { text: "Doctor Octopus", isCorrect: false },
        { text: "Venom", isCorrect: false }
      ]
    },
    {
      question: "What is Spider-Man's real name?",
      answers: [
        { text: "Peter Parker", isCorrect: true },
        { text: "Clark Kent", isCorrect: false },
        { text: "Bruce Wayne", isCorrect: false }
      ]
    }
  ];
  
  // Global variables
  let currentQuestionIndex = 0;
  let score = 0;
  let incorrectAnswers = 0;
  
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
  }
  
  // Function to check the selected answer
  function checkAnswer(index, button) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.answers[index];
  
    // Disable all buttons once an answer is selected
    const allButtons = document.querySelectorAll('answer-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    // Provide feedback for the answer
    if (selectedAnswer.isCorrect) {
      score++;
      document.getElementById('result-message').textContent = "Correct!";
    } else {
      incorrectAnswers++;
      document.getElementById('result-message').textContent = "Incorrect!";
    }
  
    // Update the score display
    document.getElementById('score').textContent = score;
    document.getElementById('incorrect').textContent = incorrectAnswers;
    
    // Show "Next Question" button
    document.getElementById('next-question-btn').style.display = 'block';
    
    // Optionally, change the style of the clicked button (e.g., highlight the correct/incorrect answer)
    if (selectedAnswer.isCorrect) {
      button.style.backgroundColor = 'green';
    } else {
      button.style.backgroundColor = 'red';
    }
  }
  
  // Function to move to the next question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
      document.getElementById('result-message').textContent = ''; // Clear previous result
      document.getElementById('next-question-btn').style.display = 'none'; // Hide "Next Question" button
    } else {
      document.getElementById('quiz-container').innerHTML = '<h2>Quiz Finished!</h2>';
      document.getElementById('next-question-btn').style.display = 'none'; // Hide the next button at the end
    }
  }
  
  // Start the quiz
  displayQuestion();
  