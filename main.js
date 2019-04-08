// Prompt "Do you want advanced or basic"
//Prompt "What Numbers please?"
// Alert Answer

var calculatorType = prompt("What Kind of calculator would you like to use, (a)dvanced, (b)asic? or the BMI Calculator")

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
  var equation = prompt("Please input your equation. (Use * for multiplication)");
  alert(eval(equation));

}
// parseInt() - change string to int


// BMI calculator

else if (calculatorType.toLowerCase() == "bmi" || calculatorType.toLowerCase() == "bmi calculator") {
  var measurementSystem = prompt("Would you like to use the Metric or Imperial system")

  if (measurementSystem.toLowerCase() == "imperial") {
    var weightPounds = prompt("What is your weight in Pounds?");
    var heightInches = prompt("What is your height in Inches?");
    alert("Your BMI is " + (parseInt(weightPounds)/(parseInt(heightInches)*parseInt(heightInches)))*703);
  }

  else {
    var weightKilos = prompt("What is your weight in Kilos?");
    var heightMeters = prompt("What is your height in Meters?");
    alert("Your BMI is " + (parseInt(weightKilos)/(parseInt(heightMeters)*parseInt(heightMeters))));}
}
