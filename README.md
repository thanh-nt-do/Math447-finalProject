# Math447-finalProject
Complex Quadratic Equation Calculator for Math 447 Final Project

By Thanh Do, Yuhan Fu, and Phong Hoang

## Description

Based on the above theorems, we are able to build a computer program using JavaScript to solve complex quadratic equations. In particular, this program solve the complex quadratic equations in the form az<sup>2</sup> + bz + c = 0, where a, b, c are complex numbers. It has a simple user interface for inputs and will show the results (if existed) immediately on the screen.

## Instructions

Input the coefficients in the correct box order, then click the “Solve” button, the program will return the solution for the equation or alert you with a message if the coefficients are not in the correct format.

<strong>Note:</strong> the solution, if exists, will be rounded to 3 decimal places.Format of input coefficients can be in several forms as below: 

- a + bi where a and b are real numbers. Example: 2 + 3i, 5 − 6i
- z<sub>1</sub> ∗ z<sub>2</sub>, z<sub>1</sub>/z<sub>2</sub> where z1, z2 are complex numbers. Example: 2 ∗ 3i, (1 − 2i)/(3 + 5i)
- z<sub>1</sub><sup>z<sub>2</sub></sup> where z<sub>1</sub>, z<sub>2</sub> are complex numbers. Example: (3 + 2i)<sup>5i</sup>
- Other mathematical expressions such as sqrt() (square root), abs() (absolute value), e, log(), etc. Example: sqrt(2), log(3)

<strong>Note:</strong> mathematical expressions like sqrt() or log() is case sensitive and must be put in the exact form as shown. Example of invalid input: Sqrt(2), sqRT(2), etc.

## Limitations

One of the limitations of the program is that it cannot give exact results in terms of square root. Because the way computer works is that it covert any square root numbers into decimal numbers and calculate rather than calculating under/inside the square root.

Another limitation is that we set the program to round the solutions to 3 decimal places. Therefore, really small numbers (for example: 0.000005) will be rounded to the nearest whole number. We decide that 3 decimal places are significant enough, and getting more decimal places wouldn’t effect the result significantly.
