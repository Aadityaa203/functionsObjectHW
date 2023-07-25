// Function Review:
// 2. Create a function that returns the sum of two arguments

function sumOfTwoArguments(a, b) {
  return a + b;
}

// 3. console.log the function, passing in any two numbers as arguments.
// example:
// console.log(myAddFunction(1,2))
// This should log the number three in your console.
function myAddFunction(num1, num2) {
  return num1 + num2;
}
console.log(myAddFunction(2, 6));

// 4. Repeat steps two and three, but with a new function that adds three arguments together.
function addThreeArg(x, y, z) {
  return x + y + z;
}
console.log(addThreeArg(1, 4, 7));

// 5. Repeat steps two and three, but with a new function that adds four arguments together.
function addFourArgs(a, b, c, d) {
  return a + b + c + d;
}
console.log(addFourArgs(3, 4, 6, 9));

// For the exercises below, paste them into your js file with your functions.
// Objects:
// 6. Create three new variables and assign objects as their values. Each object should have at least three property-value pairs.
// (https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects)
let varx = { number: 3, writer: "brady cole", male: true };
let vary = { rank: 4, name: "harry", female: false };
let varz = { position: 7, who: "sam miguel", male: undefined };

// 7. For each Object write a console.log line that access one property using the dot notation.
// (https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-dot-notation)
console.log(varx.male);
console.log(vary.name);
console.log(varz.position);
// 8. For each Object write a console.log line that access one property using the bracket notation.
// (https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation)
console.log(varx["writer"]);
console.log(vary["name"]);
console.log(varz["who"]);
// 9. For each object, add a new property value pair using dot or bracket notation.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object
//bracket notation
varx["city"] = "cincinnati";
console.log(varx);
vary["car"] = "toyota";
console.log(vary);
varz["country"] = "USA";
console.log(varz);
//Dot notation
varx.city = "fairfield";
console.log(varx);
vary.car = "honda";
console.log(vary);
varz.country = "Nepal";
console.log(varz);
// 10. For each object update a property value pair using bracket or dot notation.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/updating-object-properties
varx["city"] = "Kathmandu";
console.log(varx);
vary["car"] = "nissan";
console.log(vary);
varz["country"] = "Bhutan";
console.log(varz);
//Dot notation
varx.city = "Pokhara";
console.log(varx);
vary.car = "Civic";
console.log(vary);
varz.country = "Canada";
console.log(varz);
