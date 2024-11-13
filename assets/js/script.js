// Quiz questions and answers structure
const quizQuestions = [
    {
      question: "", // Fill with your question
      answers: [
        { text: "", isCorrect: true },  // Correct answer
        { text: "", isCorrect: false },
        { text: "", isCorrect: false }
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
      button.onclick = () => checkAnswer(index);
      answerButtons.appendChild(button);
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(index) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.answers[index];
  
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
  