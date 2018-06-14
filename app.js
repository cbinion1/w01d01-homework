//1.  The difference between Interpolation and Concatenation is:  Concatenation is the action of combining
//together two or more strings end to end while Interpolation is a process wherein values are evaluated 
//using placeholders.  When the placeholders are evaluated, are replaced with thier corresponding values. 
//This allows for easier string formatting when compared to Concatenation.

//2.  DRY stands for Don't Repeat Yourself.  It's important to pay attenttion to DRY code so that it doesn't
//get too complicated due to repetition, and cluttering the code.  One of the best tools for rewriting
//repetitive code is Functions.  

var a = 4;
var b = 53;
var c = 57;
var d = 16;
var e = 'Kevin';

a < b;
c > d;
'Name' == 'Name';
a + b == c;
a * a == d;
e == 'Kevin';
48 != '48';

//While Loops:  This is an infinite loop because there is no break for the code finish executing.

//Infinte Loop II:  This is a finite loop because the code defines how the loop will end by changing
//the variable/constant to false upon completion of execution.

//Reading Code:  The expected output of the provided code is that it will add an 'A' with every iteration
//until the number of A's reaches a number greater than 20, which should be 21 A's.
//Upon running the code, there were 21 A's output.

//For/While loops:  Although similar, 'for' and 'while' loops differ in that 'for' loops loop through code
//a number of times, while 'while' loops loop through code until a condition is no longer true.

for (var i = 0; i < 1000; i++) {
  console.log(i); }

//Statement 1 is the first part of the code block that sets a variable before the loop starts (var i = 0).
//Statement 2 is the part after the first that defines the condition for long the loop will run (i must be 
//less than 1000).
//Statement 3 increases the numberby 1 each time the code block in the loop has been executed.

for (var i =10000; i < 0; i--) {
  console.log(i); }

  for (var i = 1; i > 10; i++) {
  console.log("The value of i is: " + i + " of 10"); }

  




