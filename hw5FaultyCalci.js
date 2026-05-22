let num1 = Number(promp("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let operation = prompt("Enter the operation (+, -, *, /): ");

let result, random = Math.random();

if (random < 0.1) {     // 10% chance of being faulty
    if (operation === "+") {
        result = num1 - num2;
        console.log("The sum is: " + result);
    } else if (operation === "-") {
        result = num1 / num2;
        console.log("The difference is: " + result);
    } else if (operation === "*") {
        result = num1 + num2;
        console.log("The product is: " + result);
    } else if (operation === "/") {
        result = num1 ** num2;
        console.log("The quotient is: " + result);
    } else {
        console.log("Invalid input");
    }
} else {
    if (operation === "+") {
        result = num1 + num2;
        console.log("The sum is: " + result);
    } else if (operation === "-") {
        result = num1 - num2;
        console.log("The difference is: " + result);
    } else if (operation === "*") {
        result = num1 * num2;
        console.log("The product is: " + result);
    } else if (operation === "/") {
        result = num1 / num2;
        console.log("The quotient is: " + result);
    } else {
        console.log("Invalid input");
    }
}

