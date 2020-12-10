window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  const initialValues = { amount: 5000, years: 5, rate: 4.5 };
  const amountUI = document.getElementById("loan-amount");
  const termUI = document.getElementById("loan-years");
  const rateUI = document.getElementById("loan-rate");
  amountUI.value = initialValues.amount;
  termUI.value = initialValues.years;
  rateUI.value = initialValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // monthly interest rate (i)
  const i = values.rate / 100 / 12;
  //total number of payments (n)
  const n = Math.floor(values.years * 12);

  return ((values.amount * i) / (1 - Math.pow(1 + i, -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log(monthly);
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerHTML = `$ ${monthly}`;
}
