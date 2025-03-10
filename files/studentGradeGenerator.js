//a Program that prompts user to input student marks and outputs corresponding grade as defined

const prompt = require("prompt-sync")(); //enables it to run on node environment and prompt

function gradeGenerator() {
  let marks = parseInt(prompt("Enter student marks (0-100): ")); //converts an interger to a number

  if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid input! Please enter a number between 0 and 100."); // validates to ensure a valid number is entered
  } else {
    let grade =
      marks > 79
        ? "A"
        : marks >= 60
        ? "B"
        : marks >= 50
        ? "C"
        : marks >= 40
        ? "D"
        : "E";
    console.log(`Grade: ${grade}`); //prints grade according to marks on input
  }
}

gradeGenerator(); // calling the program
