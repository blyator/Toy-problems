//This is a program that checks a driver's speed and applies penalties

const prompt = require("prompt-sync")(); //ensures it runs on node enironment and prompts

function speedDetector() {
  let speed = parseInt(prompt("Enter speed (km/h): "));

  if (isNaN(speed) || speed < 0) {
    console.log("Invalid speed! Please enter valid speed."); // validation to ensure valid input
    return;
  }

  if (speed <= 70) {
    console.log("Ok");
  } else {
    let points = Math.floor((speed - 70) / 5);
    console.log(`Points: ${points}`);

    if (points > 12) {
      console.log("License suspended");
    }
  }
}
speedDetector(); // calling the program
