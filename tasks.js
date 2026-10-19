//Write a program that prompts the user to enter the base and height of a triangle and returns its area.
let base = Number(prompt("Enter the base:"));
let height = Number(prompt("Enter the height:"));

let area = (base * height) / 2;

console.log("Area of triangle is " + area);

//Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, display  either “odd” or “even” to the user.
let number = Number(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

if (number % 4 === 0) {
    console.log("divisible by 4");
}

//Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
//e.g if a user enters “0712345678”, the program should display “+254712345678”
//e.g if a user enters “0112345678”, the program should display “+254112345678”
//e.g if a user enters “712345678”, the program should display “+254712345678”

let phone = prompt("Enter your phone number:");

if (phone.startsWith("+254")) {
    phone = phone;
} else if (phone.startsWith("254")) {
    phone = "+" + phone;
} else if (phone.startsWith("07") || phone.startsWith("01")) {
    phone = "+254" + phone.substring(1);
} else if (phone.startsWith("7") || phone.startsWith("1")) {
    phone = "+254" + phone;
} else {
    phone = "Invalid phone number";
}

console.log(phone);

//Write a program which accepts email as form input or from terminal. Validate the email by checking if it's a valid email. 
//Hint: Check if it contains an “@” symbol and “.” symbol.

let email = prompt("Enter your email:");

if (email.includes("@") && email.includes(".")) {
    console.log("Valid email");
} else {
    console.log("Invalid email");
}

//Implement a program that takes 3 users  inputs from the terminal or the Browser, and stores them in three variables. Return the largest of the three. Do this without using the the inbuilt max () function!
//The goal of this exercise is to think about some internals that programs normally take care of for us. 

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest");
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest");
} else {
    console.log(num3 + " is the largest");
}

//Write a program that lets the user input a password. Give them only 4 attempts to check the passwords entered against “admin@123”. If the password is correct access is granted. After you show them a message , the account is blocked.
let correctPassword = "admin@123";
let attempts = 0;

while (attempts < 4) {
    let password = prompt("Enter your password:");

    if (password === correctPassword) {
        console.log("Access granted");
        break;
    } else {
        attempts++;
        console.log("Wrong password");
    }
}

if (attempts === 4) {
    console.log("Account blocked");
}

//Write that prompts the user to input student marks. The input should be between 0 and 100.Then output the correct grade: 
//A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40
let marks = Number(prompt("Enter student marks:"));

if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
} else if (marks > 79) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks > 49) {
    console.log("Grade C");
} else if (marks >= 40) {
    console.log("Grade D");
} else {
    console.log("Grade E");
}

//Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
//Example If rows is 5, it should print the following:
//*
//**
//***
//****
//*****.....

let rows = Number(prompt("Enter the number of rows:"));

for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}

//Write a program that calculates the total stock in a company from the array/list below if we know that the stock is the last digit in every array/list.

//prods = [[‘omo’,’30kshs’,’300’], [‘milk’,’50kshs’,’200’],[‘bread’,’45kshs’,’359’], [‘coffee’,’5kshs’,’79’]]

let prods = [
    ["omo", "30kshs", "300"],
    ["milk", "50kshs", "200"],
    ["bread", "45kshs", "359"],
    ["coffee", "5kshs", "79"]
];
let totalStock = 0;

for (let i = 0; i < prods.length; i++) {
    totalStock += Number(prods[i][2]);
}

console.log("Total stock is " + totalStock);
