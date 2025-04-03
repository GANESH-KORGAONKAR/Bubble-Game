// Function to generate new bubbles with random numbers
function newBubble() {
    let RandomNumGenerator = "";
    let numBubbles;

    // Adjust the number of bubbles based on screen size
    if (window.innerWidth > 1024) {
        numBubbles = 48; // Desktop
    } else if (window.innerWidth > 768) {
        numBubbles = 36; // Tablet
    } else {
        numBubbles = 32; // Mobile
    }


    for (let i = 1; i <= numBubbles; i++) {
        let RandomN = Math.floor(Math.random() * 10);
        RandomNumGenerator += `<div class="bubble">${RandomN}</div>`;
    }

    document.querySelector("#content-mid").innerHTML = RandomNumGenerator;
}

// Variable to store the target number
let hit = 0;

// Function to generate a new target number
function newHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#newHit").textContent = hit;
}

// Timer variables
let timer = 60;
let gameOver = false;
let TimerVal; // Store timer interval

// Function to start the countdown timer
function runTimer() {
    clearInterval(TimerVal); // Clear any previous timer to prevent speedup
    TimerVal = setInterval(function () {
        if (timer > 0 && !gameOver) {
            timer--;
            document.querySelector("#Timer").textContent = timer;
        } else {
            clearInterval(TimerVal);
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
    clearInterval(TimerVal); // Stop the timer
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

// Restart Button Click Event
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

// Initialize the game
newBubble();
newHit();
runTimer();
