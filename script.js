// script.js
let timerInterval;
let startTime = 0;
let elapsedTime = 0;

const timerDisplay = document.querySelector('.timer');
const lapsList = document.getElementById('laps');

// Start the timer
document.getElementById('start').addEventListener('click', () => {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime; // Set start time considering elapsed time
    timerInterval = setInterval(updateTime, 10); // Update time every 10 milliseconds
  }
});

// Pause the timer
document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timerInterval); // Stop the timer
  timerInterval = null; // Reset timer interval
});

// Reset the timer
document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval); // Stop the timer if running
  timerInterval = null; // Reset timer interval
  elapsedTime = 0; // Reset elapsed time
  timerDisplay.textContent = '00:00:00'; // Reset display
  lapsList.innerHTML = ''; // Clear laps
});

// Record a lap
document.getElementById('lap').addEventListener('click', () => {
  if (timerInterval) {
    const lapTime = document.createElement('li'); // Create a new list item for the lap
    lapTime.textContent = timerDisplay.textContent; // Set lap time
    lapsList.appendChild(lapTime); // Add lap time to the list
  }
});

// Update timer display
function updateTime() {
  elapsedTime = Date.now() - startTime; // Calculate elapsed time
  const time = new Date(elapsedTime); // Create a new date object with elapsed time
  const minutes = String(time.getUTCMinutes()).padStart(2, '0'); // Get minutes
  const seconds = String(time.getUTCSeconds()).padStart(2, '0'); // Get seconds
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0'); // Get milliseconds
  timerDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`; // Update display
}