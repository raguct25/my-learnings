//imediate invoke function call
(function imediateInvokeFuntion() {
  console.log("Imediate Invoke Function called");
})();

//functions declartions
function testHello() {
  console.log("test hello");
}

//fucntion expresssion
const functionExpression = function testHello() {
  // testHello() not a conflict it's called by functionExpression
  console.log("Function expresssion called");
};

// Anonymous Function call
const anonymousFunction = function () {
  console.log("Anonymous  Function  called");
};

// Arrow functions also call as (fat arrow function ) likely => and arrow function don't have this key for access value

//arrow function called
const testArrowWay1 = () => {
  //need should use return
  console.log("Arrow function called ");
};

//single arugument no need parentheses
const testArrowWay2 = (a) => console.log("Arrow function called", a);

//multi arugument need parentheses
const testArrowWay3 = (a, b) =>
  console.log("Arrow function called", `${a}${b}`);

// function call
functionExpression();
anonymousFunction();
testArrowWay1();
testArrowWay3("ragu", "gandhi");

// Arrow function in Object
const person = {
  firstName: "ragu",
  lastName: "gandhi",
  getFullName: () => `${person.firstName}${person.lastName}`,
  getName() {
    return person.firstName;
  },
};

console.log("person is", person.getFullName());
console.log("person name is", person.getName());

// Arrow functions as a callback functions using map functionconst

const numbers = [1, 2, 3, 4, 5];

// const squareNumbers = numbers.map((item) => {
//   return item * item;
// });

//short hand for avoid return method
const squareNumbers = numbers.map((item) => item * item);

console.log("squareNumbers", squareNumbers);

//retruning object literals in arrow functions

// const mobileInfo = () => {
//   return {
//     id: 1,
//     mobile: "redmi",
//   };
// };

//avoid curly  {} and return braces
const mobileInfo = () => ({
  id: 1,
  mobile: "redmi",
});

console.log("mobileInfo", mobileInfo());

//pure functions  (same output for the same input)

const add2 = add(10, 10); //pure function (same as hoisting logic)
function add(a, b) {
  console.log("add", a + b);
  return a + b;
}

const addArrow = (a, b) => {
  console.log("addArrow", a + b);
  return a + b;
};

const addArrow1 = addArrow(10, 10); //pure function

//impure functions (if modify outside of state like array object varibles thats called impure function)

const numArray = ["one", "two", "three", "four", "five"];

function arrayImpureFun(val) {
  return numArray.push(val); // this will retutrn array length only
  // return [...numArray, val]; // this will return array
}

const arrayImpuredFun = arrayImpureFun("six");

console.log("numArray", numArray); // if it return updated new array it has called by impure function

console.log("arrayImpuredFun", arrayImpuredFun);
