
var operation = prompt("Enter operation (+, -, *, /):");
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));

switch(operation) {
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '*':
        alert(num1 * num2);
        break;
    case '/':
        alert(num1 / num2);
        break;
    default:
        alert("Invalid operation");
}