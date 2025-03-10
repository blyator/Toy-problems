//This program calculates an employee's net salary after deductions.

const prompt = require("prompt-sync")();

function calculateNetSalary() {
  let basicSalary = parseFloat(prompt("Enter Basic Salary in Ksh: "));
  let benefits = parseFloat(prompt("Enter Benefits (Ksh): "));

  if (
    isNaN(basicSalary) ||
    isNaN(benefits) ||
    basicSalary < 0 ||
    benefits < 0
  ) {
    return console.log("Enter salary in Ksh");
  }

  let grossSalary = basicSalary + benefits;
  let nssfDeduction = calculateNSSF(grossSalary);
  let taxableIncome = grossSalary - nssfDeduction;
  let payee = calculatePAYE(taxableIncome);
  let shifDeduction = grossSalary * 0.0275;
  let personalRelief = 2400;
  let netTax = Math.max(0, payee - personalRelief);
  let netSalary = grossSalary - (netTax + shifDeduction + nssfDeduction);

  console.log(`\n--- Salary Breakdown ---`);
  console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
  console.log(`PAYE (Tax): Ksh ${payee.toFixed(2)}`);
  console.log(`NSSF Deduction: Ksh ${nssfDeduction.toFixed(2)}`);
  console.log(`SHIF Deduction: Ksh ${shifDeduction.toFixed(2)}`);
  console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
}

function calculatePAYE(taxableIncome) {
  let tax = 0;
  if (taxableIncome <= 24000) {
    tax = taxableIncome * 0.1;
  } else if (taxableIncome <= 32333) {
    tax = 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
  } else if (taxableIncome <= 500000) {
    tax = 24000 * 0.1 + 8333 * 0.25 + (taxableIncome - 32333) * 0.3;
  } else if (taxableIncome <= 800000) {
    tax =
      24000 * 0.1 +
      8333 * 0.25 +
      467667 * 0.3 +
      (taxableIncome - 500000) * 0.325;
  } else {
    tax =
      24000 * 0.1 +
      8333 * 0.25 +
      467667 * 0.3 +
      300000 * 0.325 +
      (taxableIncome - 800000) * 0.35;
  }
  return tax;
}

function calculateNSSF(grossSalary) {
  let tier1 = Math.min(grossSalary, 8000) * 0.06;
  let tier2 = Math.max(0, Math.min(grossSalary - 8000, 72000)) * 0.06;
  return Math.min(2160, tier1 + tier2);
}

calculateNetSalary();
