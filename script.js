let score = 0;                // Total score counter
let currentAnswer = 0;        // Holds the correct answer
let isAnswered = false;       // Prevents scoring same question twice

// Generate a random question
function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operations = ['+', '-', '*', '/'];
  const op = operations[Math.floor(Math.random() * operations.length)];

  let questionText = `${num1} ${op} ${num2}`;
  currentAnswer = eval(questionText).toFixed(2); // Rounded to 2 decimal places

  document.getElementById('question').innerText = `What is ${questionText}?`;
  document.getElementById('answer').value = '';
  document.getElementById('result').innerText = '';
  document.getElementById('nextBtn').style.display = 'none';
  isAnswered = false; // Reset for next question
}

// Check the user's answer
function checkAnswer() {
  if (isAnswered) return; // Do nothing if already answered correctly

  const userAnswer = parseFloat(document.getElementById('answer').value);
  const result = document.getElementById('result');

  if (Math.abs(userAnswer - currentAnswer) < 0.01) {
    result.innerHTML = "🎉 Correct! Great job! 🎉";
    score++;
    document.getElementById('score').innerText = `🏆 Score: ${score}`;
    isAnswered = true;
    document.getElementById('nextBtn').style.display = 'inline-block';
  } else {
    result.innerHTML = "❌ Try again!";
  }
}

// Load the first question when the page opens
window.onload = generateQuestion;
