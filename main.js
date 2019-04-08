// Prompt "Do you want advanced or basic"
//Prompt "What Numbers please?"
// Alert Answer

var calculatorType = prompt("What Kind of calculator would you like to use, (a)dvanced or (b)asic?")

if (calculatorType.toLowerCase() == "a" || calculatorType.toLowerCase() == "advanced") {
  var calculationType = prompt("Would you like to use the 'power' or 'square root' feature");

    if (calculationType.toLowerCase() == "power") {
      var raise = prompt("What number would you like to have raised");
      var power = prompt("And what power would you like that to be raised to?");
      alert(parseInt(raise) ** parseInt(power));
    }
    else {
      var sqrt = prompt("What number would you like to have square rooted?");

      alert(Math.sqrt(parseInt(sqrt)));
    }

}

else if (calculatorType.toLowerCase() == "b" || calculatorType.toLowerCase() == "basic") {
  // Basic Calculator
  var equation = prompt("Please input your equation");
  alert(eval(equation));

}
// parseInt() - change string to int


// BMI calculator
