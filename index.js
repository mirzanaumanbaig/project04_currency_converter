import inquirer from "inquirer";
let Conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.27,
        "PKR": 353.74,
        "GBP": 1
    },
    "USD": {
        "GBP": 0.79,
        "PKR": 278.48,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your from currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion to currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter you convertion ammount:"
    }
]);
console.log(answer);
const { from, to, amount } = answer;
console.log(from);
console.log(to);
console.log(amount);
if (from && to && amount) {
    let result = Conversion[from][to] * amount;
    console.log("Your convertion from " + from + " to " + to + " is " + result);
}
else {
    console.log("Invalid inputs");
}
