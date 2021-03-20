# Password-Generator
Hello, and welcome to the third homework. In this assignment, the goal was to create a password generator using JavaScript.

To make a good password for sensitive data, the password must be complex. This means characters must be 
be greater than eight and less than 128. The characters should include lower (a-z), uppercase (A-Z), numbers (0 though 9), and special characters (!@#$%^&*()).

These can be mentioned as variables with value of strings. See lines 1- 4.

Below the variables, we have our function called password choice. we have a variable called length with parseInt. This converts strings to an integers. A prompt is included to ask the user how many characters you want. If you choose less than 7, user will see the page say password nust be at least 8 characters. If the number is greater than 128, then user will see the page say password must be less than 128 characters. 

If you enter the a number between 8 - 128, then you are ask a set of questions on how you want to the password to be generated. If you click okay then the password will inlcude all the variables in the above. It is your choice on how complex you want the password to be. See lines 15 - 30.

On line 33, we include another function that includes a for loop. This function acts to run the same line of code. This code is tageting the function above to repeat. We can generate a password as many times as you want.

Lines 40 - 72 is the code on generating the password itself and randomly selecting characters from the variables from lines 1-4.

Below is the code that was given to us. We have query selector and event listeners which is the final touch of executing the behavior of the webpage.