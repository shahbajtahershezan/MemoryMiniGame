Memory Match Game
A modern, responsive memory matching card game built with HTML, CSS, and JavaScript. This multiplayer game features a clean interface, player profiles, score tracking, and a leaderboard system.

🎮 Features
Core Gameplay
Two-Player Mode: Alternate turns between Player 1 and Player 2

Memory Matching: Match 14 pairs of food-themed cards

Score Tracking: Real-time score updates for both players

Turn System: Visual indicators for current player's turn

Timer: Track game completion time

Statistics: Match count and total turns displayed

User Interface
Responsive Design: Works on all devices (desktop, tablet, mobile)

Modern Aesthetics: Gradient backgrounds and card animations

Visual Feedback: Highlight active player, match animations

Intuitive Controls: Easy-to-use buttons and navigation

Progress Indicators: Game statistics and timer

User Management
Login System: Personalized player names

Game Save: Save progress and scores

Leaderboard: Track high scores across sessions

Player Profiles: Individual game statistics

📁 Project Structure
text
memory-match-game/
│
├── index.html          # Main HTML file
├── style.css           # CSS stylesheet
├── game.js             # JavaScript game logic
│
├── img/                # Images folder (create this)
│   ├── card.png        # Card back image
│   ├── wolv.jpg        # Player 1 avatar
│   ├── dpool.jpg       # Player 2 avatar
│   │
│   ├── pizza.png       # Food card images
│   ├── milkshake.png
│   ├── ice-cream.png
│   ├── hotdog.png
│   ├── fries.png
│   ├── cheeseburger.png
│   ├── tacos.png
│   ├── noodle.jpg
│   ├── pastry.jpg
│   ├── donut.jpg
│   ├── chick.jpg
│   ├── cheese.jpg
│   ├── pies.jpg
│   └── cake.jpg
│
└── README.md           # This file
🚀 Getting Started
Prerequisites
Web browser (Chrome, Firefox, Safari, Edge)

Text editor (VS Code, Sublime Text, etc.)

Installation
Clone or download the project files

Create the img/ folder in your project directory

Add all image files to the img/ folder:

Card back image as card.png

Player avatars: wolv.jpg and dpool.jpg

14 food images (see list above)

Open index.html in your web browser

Quick Start
Download all files to a folder

Place images in an img/ subfolder

Open index.html in your browser

Enter your name and start playing!

🎯 How to Play
Start the Game

Enter your name and click "Start Game"

Player 1 always starts first

Game Rules

Players take turns flipping two cards

Find matching pairs of food cards

If cards match, player scores a point and gets another turn

If cards don't match, they flip back and turn switches

Match all 14 pairs to complete the game

Winning

Player with the most matches wins

Tie game if scores are equal

Game automatically restarts after completion

Controls

Click cards to flip them

Use "Restart" button to start new game

Use "Save" button to save progress

View "Leaderboard" to see high scores

🛠️ Technical Details
HTML Structure
Three main sections: Login, Game, and Leaderboard

Responsive grid layout for cards

Semantic HTML elements

Accessible design with proper alt text

CSS Features
CSS Grid for card layout

Flexbox for responsive alignment

CSS animations for card flipping

Media queries for responsive design

CSS variables for consistent theming

Gradient backgrounds and shadows

JavaScript Functionality
Game Logic: Card matching, turn management, scoring

Local Storage: Save player data and game state

Dynamic Updates: Real-time DOM manipulation

Event Handling: Click events, game state management

Timer System: Game duration tracking
