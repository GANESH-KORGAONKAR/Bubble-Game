// Function to generate new bubbles with random numbers
function newBubble() {
    let RandomNumGenerator = "";

    // Creating 60 bubbles with random numbers between 0-9
    for (let i = 1; i <= 60; i++) {
        let RandomN = Math.floor(Math.random() * 10);
        RandomNumGenerator += `<div class="bubble">${RandomN}</div>`;
    }

    // Updating the game board with newly generated bubbles
    document.querySelector("#content-mid").innerHTML = RandomNumGenerator;
}

// Variable to store the number that needs to be hit
let hit = 0;

// Function to generate a new target number
function newHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#newHit").textContent = hit;
}

// Timer variable and gameOver flag
let timer = 60;
let gameOver = false; // Flag to track if the game has ended

// Function to start and update the countdown timer
function runTimer() {
    let TimerVal = setInterval(function () {
        if (timer > 0 && !gameOver) { // Check if the game is still running
            timer--;
            document.querySelector("#Timer").textContent = timer;
        } else {
            clearInterval(TimerVal); // Stop the timer
            if (!gameOver) {
                document.querySelector("#content-mid").innerHTML = `<h1>GAME OVER</h1>`;
            }
        }
    }, 1000);
}

// Score variable
let score = 0;

// Function to update the score when a correct bubble is clicked
function UpdateScore() {
    score += 10;
    document.querySelector("#Score").textContent = score;
}

// Function to handle game over scenario
function GameOver() {
    gameOver = true; // Set game over flag to true
    document.querySelector("#content-mid").innerHTML = `<h1>GAME OVER</h1> 
    <h2>You Clicked Wrong Number</h2>`;
}

// Event listener to check for bubble clicks
document.querySelector("#content-mid").addEventListener("click", function (num) {
    let ClickedNum = Number(num.target.textContent);
    
    if (!gameOver) { // Allow clicks only if the game is still running
        if (hit === ClickedNum) {
            UpdateScore(); // Increase score
            newBubble();   // Generate new bubbles
            newHit();      // Generate new target number
        } else {
            GameOver();    // End the game if the wrong number is clicked
        }
    }
});

// Add event listener to restart button
document.querySelector("#button").addEventListener("click", restartGame);

// Function to restart the game
function restartGame() {
    // Reset variables
    timer = 60;
    score = 0;
    gameOver = false;

    // Update UI elements
    document.querySelector("#Timer").textContent = timer;
    document.querySelector("#Score").textContent = score;

    // Restart the game logic
    newBubble();
    newHit();
    runTimer();
}

// Initializing the game
newBubble();
newHit();
runTimer();
