// Decisions(conditionals)

// There are two components to a decision
// 1. An expression is evaluated, which returns a value
// 2. A conditional statement says what to do in a given situation.

/* Evaluation of condition
    In order to make a decision, your code checks the current status of the script.
    This is commonly done by comparing two values using a comparison operator which 
    returns a value of true or false. 

   Conditional Statements
    A conditional statement is based on a concept of if/then/else;
    IF a condition is met, THEN your code executes one or more statements,
    ELSE your code does something different(or just skips the step). */

    if(score > 50) // if condition returns true
    {
      document.write('You passed!'); // execute this code
    } else {
    	document.write('Try again...'); // else do this.
    }
// Using comparison operators
var pass = 50; // pass mark
var score = 90; // Score

// Check if the user has passed
var hasPassed = score >= pass;

// Write the message into the page
var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;

// Comparing two expressions
var score1 = 90; // Round 1 score
var score2 = 95; // Round 2 score
var highScore1 = 75 // Round 1 highscore
var highScore2 = 95 // Round 2 highscore

// Check if scores are higher than current high scores
var comparison = (score1 + score2) > (highScore1 + highScore2);

// Write the message into the page
var el = document.getElementById('answer');
el.textContent = 'New high score: ' + comparison;

// Using logical AND(&&)

var score1 = 8; // Round 1 score
var score2 = 8; // Round 2 score
var pass1 = 6;
var pass2 = 6;

// Check whether user passed both rounds, store result in variable
var passBoth = (score1 >= pass1) && (score2 >= pass2);

// Create message
var msg = 'Both rounds passed: ' + passBoth;

// Write the message into the page
var el = document.getElementById('answer');
el.textContent = msg;

// Using logical OR(||) and logical NOT(!)

var score1 = 8; // Round 1 score
var score2 = 8; // Round 2 score
var pass1 = 6;
var pass2 = 6;

// Check whether user passed both rounds, store result in variable
var minPass = (score1 >= pass1) || (score2 >= pass2);

// Create message
var msg = 'Resit required: ' + !(minPass)

// Write the message into the page
var el = document.getElementById('answer');
el.textContent = msg;

// Using IF statements
var score = 75; //score
var msg; // message

if(score >= 50) { // If score is 50 or higher
 msg = 'Congratulations!';
 msg += ' Proceed to the next round.';
}
var el = document.getElementById('answer')
el.textContent = msg;

// Alternative way of IF with a callback function

var score = 75;
var msg = '';

function congratulate() { // 2
	msg += 'Congratulations! ';
}

if(score >= 50) { // 1
	congratulate();
	msg += 'Proceed to the next round.'; // 3
}

// Using IF...ELSE statements
var pass = 50; // Pass mark
var score = 75; // Current score
var msg; // Message

// Select message to write based on score
if(score >= pass) {
	msg = 'Congratulations, you passed!';
} else {
	msg = 'Have another go!'
}

// Using switch statements
var msg; // Message
var level = 2 // Level

// Determine message based on level
switch(level) {
 case 1:
  msg = 'Good luck on the first level test';
  break;

 case 2:
  msg = 'Second of three - keep going!';
  break;

 case 3:
  msg = 'Final round, almost there!';
  break;

 default:
  msg = 'Goodluck!';
  break;

}
// Short circuit values
// Logical operators are processed left to right
// They short circuit(stop) as soon as they have a result-
// but they return the value that stopped the processing(not necessarily true or false)

/* The variable artist is given a value of Rembrandt.
   if the variable artist has a value, then artistA will be
   given the same value as artist(because a non-empty string is truthy) */
var artist = 'Rembrandt' 
var artistA = (artist || 'Unknown');

// If the string is empty, artistA becomes a string 'Unknown'
var artist = ''
var artistA = (artist || 'Unknown')

/* Here are three values. If any one of them is considered truthy, the code
   inside the if statement will execute. When the script encounters valueB
   in the logical operator , it will short circuit because the number 1 is
   considered truthy  and the subsequent code block is executed.
   */

   valueA = 0;
   valueB = 1;
   valueC = 2;

   if(valueA || valueB || valueC) {
   	// Do something here
   }