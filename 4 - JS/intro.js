var numero;
numero = 4;
console.log(numero)

var frase;
frase = "Noice";
console.log(frase);

let number1 = 10;
let number2 = 10;
if (number1 > number2) {
     console.log("Number 1 is greater than number 2")
}
else if (number1 == number2) {
    console.log("The numbers are equal")
}
else {
    console.log("Number 2 is greater than number 1")
}

console.log(5 > 4)

let num = 10
do {
    console.log(num)
    num = num + 1
} while (
    num <= 15
)
console.log("out: " + num)

for (i = 0; i <= 10; i++) {
    console.log(i)
}

/*
switch (prompt("¿Cómo está el clima?")) {
    case "lluvioso":
        console.log("Lleva paraguas");
        break;
    case "soleado":
        console.log("Lleva bloqueador");
        break;
    default:
        console.log("No c")
}
*/

console.log("-------------------Functions------------------")
const square = function (x) {
    return x * x;
}
console.log(square(2));

function sumar(x, y) {
    return x + y;
}
console.log(sumar(2, 7));

const restar = (a, b) => {
    return a - b;
}
console.log(restar(10, 5));


console.log("-------------------Exceptions------------------")
function directionPrompt(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result)
}
function look() {
    if (directionPrompt("Look where?") == "L") {
        return "a house";
    } else {
        return "two angry bears"
    }
}
try {
    console.log("Look ", look());
} catch (error) {
    console.log("There was an error: " + error);
    console.log("Look ", look());
}