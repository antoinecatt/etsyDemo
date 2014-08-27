//Loops

/* Loops check a condtion. if it returns true, a code block will run.
   Then the condition will be checked again if it still returns true,
   the code block will run again. It repeats until the condition returns false.
   There are three common types of loops: 

   FOR: if you need to run a specific number of times, use a for loop.
        (it is the most common loop) In a for loop, the condition is usually
        a counter which is used to tell how many times the loop should run.

   WHILE: If you do not know how many times the code should run, you can use
          a while loop. Here the condition can be something other than a counter,
          and the code will continue to loop for as long as the condition is true.

   DO WHILE: The do...while loop is very similar to the while loop, but has one key
             difference: it will always run the statements inside the curly braces
             at least once, even if the condition evaluates to false. */

             for(var i =0; i < 10; i++) {
             	// do something;
             }

// Loop counters 
/* a for loop uses a counter as a condition
   This instructs the code to run a specified number of times.
   Here you can see the condition is made up of three statements:

   Initialization
    Create a variable and set it to 0.
    This variable is commonly called i,
    and it acts as a counter.*/
    var i = 0;

    /* The variable is only created the first time the loop is run
       (You may alse see the variable called index, rather than just i)
       
       You will sometimes see this variable declared before the condition.
       The following is athe same and it is mainly a preference of the coder.
       var i;
       for (i=0; i<10; i++) {
	     // code goes here;
       } */
// Condition
// The loop should continue to run until the counter reaches a specified number.
    i < 10;

/* The value of i was initially set to 0, so in this case the loop will run
   10 times before stopping.

   The condition may also use a variable that holds a number.
   If a variable called rounds held the number of rounds in a test
   and the loop ran once for each round, the condition would be:
   var rounds = 3;
   i < (rounds);
    */

// Update
// Every time the loop has run the statements in the curly braces, it adds one to the counter.
   i++
/* One is added to the counter using the increment(++) operator.
   Another way of reading this is that it says, "Take the variable i, and add one
   using the ++ operator."

   It is also possible for loops to count the downwards using the decrement operators(--)
    */

// Using for loops

var scores = [24, 32, 17]; // Array of scores
var arrayLength = scores.length; // Items in array
var roundNumber = 0; // Current round
var msg = ''; // Message
var i; // counter

// Loop through the items in the array
for (i = 0; i < arrayLength; i++) {
	// Arrays are zero based(so 0 is round 1)
	// Add 1 to the current round
	roundNumber = (i + 1);
	// Write the current round to message
	msg += 'Round ' + roundNumber + ': ';
    // Get the score from the scores array
    msg += scores[i] + '<br />';
}

// Using while loops
var i = 1; // Set counter to 1
var msg = ''
// Store 5 times table in a variable
while(i < 10) {
	msg += i + ' x 5 = ' + (i * 5) + '<br />';
	i++;
}

// Using DO WHILE Loops
var i = 1;
var msg = ''
// The key difference between a while loop and a do while is that the statements
// in the code block come before the condition. This means that those statements
// are run once whether or not the condition is met.
do {
	msg += i ' x 5 = ' + (i * 5) + '<br />';
	i++;
} while (i < 1);
// Note how this is already 1 and it still runs