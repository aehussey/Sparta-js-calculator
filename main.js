var calculatorType = prompt("What Kind of calculator would you like to use, (a)dvanced, (b)asic?, the BMI Calculator or the Trip Calculator")

if (calculatorType.toLowerCase() == "a" || calculatorType.toLowerCase() == "advanced") {

// Advanced Calculator

  var calculationType = prompt("Would you like to use the 'power' or 'square root' feature?");

    if (calculationType.toLowerCase() == "power") {
      var raise = prompt("What number would you like to have raised?");
      var power = prompt("And what power would you like that to be raised to?");
      alert("The answer is " + (parseInt(raise) ** parseInt(power)));
    }
    else {
      var sqrt = prompt("What number would you like to have square rooted?");

      alert("The answer is " + Math.sqrt(parseInt(sqrt)));
    }

}

else if (calculatorType.toLowerCase() == "b" || calculatorType.toLowerCase() == "basic") {

  // Basic Calculator

  var equation = prompt("Please input your equation. (Use * for multiplication)");
  alert("The answer is " + eval(equation));

}


// BMI Calculator

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

// TRIP CALCULATOR

else {
  var distance = prompt("How far are you going? (In Miles)");
  var fuelEfficiency = prompt("What is the fuel efficiency of your car? (In MPG)");
  var costPerGallon = prompt("What is your cost per gallon?");
  var speed = prompt("What will your average speed be? (In MPH)");
  var time = parseInt(distance)/parseInt(speed)

  if (speed <= 60) {
    var cost = (parseInt(distance) / parseInt(fuelEfficiency)) * parseInt(costPerGallon);
    alert("The journey will take you " + time.toFixed(2) + " hours and cost you £" + cost + ".");
  }

  else if (speed > 60) {

    fuelEfficiency = fuelEfficiency - 2*(speed-60);

    if (fuelEfficiency >= 0) {

      var cost = (parseInt(distance) / parseInt(fuelEfficiency)) * parseInt(costPerGallon);
      alert("The journey will take you " + time.toFixed(2) + " hours and cost you £" + cost + ".");

  }

    else {
      alert("This is invalid")
    }

  }

}
