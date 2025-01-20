const readline = require("readline");

// Define the fixed conversion rate
const FIXED_RATE = 0.012; // Example: 1 INR = 0.012 USD

// Set up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the INR to USD Currency Converter!");
console.log(`The fixed conversion rate is 1 INR = ${FIXED_RATE} USD.\n`);

function askUser() {
  rl.question("Enter the amount in INR (or type 'exit' to quit): ", (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Thank you for using the converter. Goodbye!");
      rl.close();
      return;
    }

    const inr = parseFloat(input);
    if (isNaN(inr) || inr < 0) {
      console.log("Please enter a valid positive number.\n");
    } else {
      const usd = (inr * FIXED_RATE).toFixed(2);
      console.log(`${inr} INR = ${usd} USD.\n`);
    }

    // Ask the user again
    askUser();
  });
}

// Start the program
askUser();

