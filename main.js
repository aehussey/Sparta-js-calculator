// Prompt "Do you want advanced or basic"
//Prompt "What Numbers please?"
// Alert Answer

var calculatorType = prompt("What Kind of calculator would you like to use, (a)dvanced or (b)asic?")

if (calculatorType.toLowerCase() == "a" || calculatorType.toLowerCase() == "advanced") {
  // Advanced Calculator

}

else if (calculatorType.toLowerCase() == "b" || calculatorType.toLowerCase() == "basic") {
  // Basic Calculator
  var equation = prompt("Please input your equation");
  alert(eval(equation));

}
// parseInt() - change string to int


// BMI calculator
