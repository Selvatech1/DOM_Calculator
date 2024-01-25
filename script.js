// script.js

document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let expression = "";
  
    // Function to handle number button clicks
    window.appendToDisplay = function (value) {
      expression += value;
      display.value = expression;
    };
  
    // Function to handle clear button click
    window.clearDisplay = function () {
      expression = "";
      display.value = "";
    };
  
    // Function to evaluate the expression
    window.calculate = function () {
      try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
      } catch (error) {
        alert("Invalid expression");
      }
    };
  
    // Add event listener for keyboard events
    document.addEventListener("keydown", function (event) {
      const key = event.key;
  
      // Check if the pressed key is a number
      if (/^\d$/.test(key)) {
        appendToDisplay(key);
      } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToDisplay(key);
      } else if (key === "Enter") {
        calculate();
      } else if (key === "Escape") {
        clearDisplay();
      } else if (!/^[0-9]$/.test(key)) {
        alert("Only numbers are allowed");
      }
    });
  });
  // script.js

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  let expression = "";

  // Function to handle number button clicks
  window.appendToDisplay = function (value) {
    expression += value;
    display.value = expression;
  };

  // Function to handle clear button click
  window.clearDisplay = function () {
    expression = "";
    display.value = "";
  };

  // Function to evaluate the expression
  window.calculate = function () {
    try {
      const result = eval(expression);
      display.value = result;
      expression = result.toString();
    } catch (error) {
      alert("Invalid expression");
    }
  };

  // Function to handle operator button clicks
  window.handleOperator = function (operator) {
    if (/[\d.]$/.test(expression)) {
      appendToDisplay(operator);
    }
  };

  // Add event listener for keyboard events
  document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Check if the pressed key is a number
    if (/^\d$/.test(key)) {
      appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      handleOperator(key);
    } else if (key === "%" || key === "Enter") {
      handleOperator("%");
    } else if (key === "Escape") {
      clearDisplay();
    } else if (!/^[0-9]$/.test(key)) {
      alert("Only numbers are allowed");
    }
  });
});

  