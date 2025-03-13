


const deck = document.querySelectorAll('.card');
deck.forEach(card => card.addEventListener('click', flipCard));

shuffleDeck(); // Randomize the board before each game

const displayScore1 = document.querySelector('#score1');
const displayScore2 = document.querySelector('#score2');
const player1Board = document.querySelector('.frame169');
const player2Board = document.querySelector('.frame170');
const turnIndicator = document.querySelector('#turnIndicator'); // Display current player's turn

let score1 = 0;
let score2 = 0;
let matchedPairs = 0; // Track how many pairs are matched
let isFirstCard = false;
let first, second;
let isBoardClosed = false;
let isPlayer1Turn = true; // Player 1 starts the game

/**
 * Shuffles the deck so that each game has a completely different board
 */
function shuffleDeck() {
    deck.forEach(card => {
        let randomIndex = Math.floor(Math.random() * 28);
        card.style.order = randomIndex;
    });
}

/**
 * Flip the selected card and manage game logic
 */
function flipCard() {
    if (isBoardClosed) return; // If the board is closed, do nothing
    if (this === first) return; // Prevent clicking the same card again

    this.classList.add('flip'); // Flip the card

    if (!isFirstCard) {
        isFirstCard = true; // First click
        first = this;
        return;
    }

    // Second click
    isFirstCard = false;
    second = this;

    // Check if the selected cards match
    checkMatch();
}

/**
 * Check if the flipped cards match
 */
function checkMatch() {
    // If cards match
    if (first.dataset.id === second.dataset.id) {
        // Remove the event listeners to disable these cards
        first.removeEventListener('click', flipCard);
        second.removeEventListener('click', flipCard);
        removeCards(first, second);

        matchedPairs++; // Increment the matched pairs count

        // Update scores
        if (isPlayer1Turn) {
            score1++;
            displayScore1.textContent = score1.toString();
        } else {
            score2++;
            displayScore2.textContent = score2.toString();
        }

        // Check if the game is over
        checkGameOver();

        // Player gets another turn if they score
        return;
    }

    // If no match, flip cards back and switch turn
    isBoardClosed = true;
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        isBoardClosed = false;
        switchTurn(); // Change the turn
    }, 1000); // Wait for a second before switching turns
}

/**
 * Removes matched cards from the board
 */
function removeCards(first, second) {
    setTimeout(() => {
        first.style.visibility = "hidden";
        second.style.visibility = "hidden";
    }, 600);
}

/**
 * Switch turns between Player 1 and Player 2 with visual feedback
 */
function switchTurn() {
    // Disable card interaction during turn switch
    deck.forEach(card => card.removeEventListener('click', flipCard));

    // Show turn complete feedback
    turnIndicator.textContent = "Switch Player";

    setTimeout(() => {
        if (isPlayer1Turn) {
            player1Board.classList.remove('active-player');
            player2Board.classList.add('active-player');
            turnIndicator.textContent = "Player 2's Turn";
        } else {
            player2Board.classList.remove('active-player');
            player1Board.classList.add('active-player');
            turnIndicator.textContent = "Player 1's Turn";
        }

        isPlayer1Turn = !isPlayer1Turn; // Toggle the turn
        deck.forEach(card => card.addEventListener('click', flipCard)); // Enable card interaction again
    }, 1000); // Wait for the visual feedback and then switch turn
}

/**
 * Reset the board state after a pair of cards is flipped
 */
function resetBoard() {
    first = null;
    second = null;
    isFirstCard = false;
    isBoardClosed = false;
}

/**
 * Restart the game
 */
function restartGame() {
    // Reset scores and shuffle the deck
    score1 = 0;
    score2 = 0;
    matchedPairs = 0;
    displayScore1.textContent = "0";
    displayScore2.textContent = "0";

    deck.forEach(card => {
        card.classList.remove('flip');
        card.style.visibility = "visible";
        card.addEventListener('click', flipCard);
    });

    shuffleDeck();
    player1Board.classList.add('active-player');
    player2Board.classList.remove('active-player');
    turnIndicator.textContent = "Player 1's Turn";
    isPlayer1Turn = true; // Reset to Player 1's turn
}

/**
 * Check if the game is over
 */
function checkGameOver() {
    if (matchedPairs === deck.length / 2) {
        if (score1 > score2) {
            alert("CONGRATULATIONS PLAYER ONE! YOU WON!");
        } else if (score2 > score1) {
            alert("CONGRATULATIONS PLAYER TWO! YOU WON!");
        } else {
            alert("IT'S A TIE!");
        }
        restartGame();
    }
}

// Highlight Player 1's board initially and display turn indicator
document.addEventListener('DOMContentLoaded', () => {
    player1Board.classList.add('active-player');
    turnIndicator.textContent = "Player 1's Turn";
});
// DOM Elements
const loginSection = document.getElementById("login-section");
const gameSection = document.getElementById("game-section");
const leaderboardSection = document.getElementById("leaderboard");
const usernameInput = document.getElementById("username");
const welcomeMessage = document.getElementById("welcome-message");
const leaderboardList = document.getElementById("leaderboard-list");

// Event Listeners
document.getElementById("login-btn").addEventListener("click", loginUser);
document.getElementById("save-state-btn").addEventListener("click", saveGameState);
document.getElementById("view-leaderboard-btn").addEventListener("click", showLeaderboard);
document.getElementById("back-to-game-btn").addEventListener("click", () => {
    leaderboardSection.style.display = "none";
    gameSection.style.display = "block";
});

// Functions
function loginUser() {
    const username = usernameInput.value.trim();

    if (!username) {
        alert("Please enter a name!");
        return;
    }

    // Save username in local storage
    localStorage.setItem("currentPlayer", username);

    // Retrieve or initialize player data
    const playerData = JSON.parse(localStorage.getItem("players")) || {};
    if (!playerData[username]) {
        playerData[username] = { highScore: 0, lastProgress: "No progress yet" };
    }
    localStorage.setItem("players", JSON.stringify(playerData));

    // Update UI
    welcomeMessage.textContent = `Welcome, ${username}!`;
    loginSection.style.display = "none";
    gameSection.style.display = "block";
}

function saveGameState() {
    const currentPlayer = localStorage.getItem("currentPlayer");
    if (!currentPlayer) {
        alert("No player logged in!");
        return;
    }

    // Example game state
    const gameState = {
        score: Math.floor(Math.random() * 100), // Replace with actual game score
        progress: "Level 2" // Replace with actual progress
    };

    // Update player data
    const playerData = JSON.parse(localStorage.getItem("players"));
    playerData[currentPlayer].lastProgress = gameState.progress;

    // Update high score
    if (gameState.score > playerData[currentPlayer].highScore) {
        playerData[currentPlayer].highScore = gameState.score;
    }

    localStorage.setItem("players", JSON.stringify(playerData));
    alert("Game progress saved!");
}

function showLeaderboard() {
    // Retrieve all players' data
    const playerData = JSON.parse(localStorage.getItem("players")) || {};

    // Clear and populate leaderboard
    leaderboardList.innerHTML = "";
    Object.keys(playerData).forEach(player => {
        const li = document.createElement("li");
        li.textContent = `${player}: High Score - ${playerData[player].highScore}, Last Progress - ${playerData[player].lastProgress}`;
        leaderboardList.appendChild(li);
    });

    // Update UI
    gameSection.style.display = "none";
    leaderboardSection.style.display = "block";
}
