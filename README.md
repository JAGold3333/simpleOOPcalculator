# OOP JS Calculator
A simple calculator built with JavaScript using an OOP approach. Capable of calculating simple arthimetic expressions.

**Link to project:** https://simpleoopcalculator.netlify.app/

![alt tag](https://cdn.glitch.global/335e1b1e-c637-47fd-8b9c-296d8cf865df/calcpicture.PNG?v=1653415548235)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

I built this calculator by first creating HTML elements for all buttons and an input form for the calculator screen. CSS was used to apply style to make it look like... well, a calculator. To make the calculator function, an event listener calls on the parseInput method within the calculator object to decide whether to append the input with a value/symbol, calculate the equation, or clear the input. 

## Optimizations

This calculator, while it works as intended, does have some flaws. For example, it currently allows inputs such as, "3.2.1". Currently, it will simply not attempt to calculate the equation if this syntax error is present. The addText method needs to be adjusted to prevent such inputs incase a user makes a mistake. As of now, a user must clear the input and write their equation over from scratch. Alternatively, a "remove last digit/symbol" button and method could be added.

## Lessons Learned:

From this project, I learned a great trick in the use of the FunctionConstructor. In the calcAnswer method, a single line of code with this constructor allows the calculator to evaluate the expression in the input.
