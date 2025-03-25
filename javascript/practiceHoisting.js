// In javascript declare default var
console.log("channel", channel);
channel = "sun";
console.log("channel-1", channel);

channel = "sun to vijay tv";
console.log("channel-2", channel);

// we can declare var also again
var channel = "vijay tv to K tv";
console.log("channel-3", channel);

// sameName = "Gandhi"; //default declaration var variable
// let sameName = "Ragu";
// ReferenceError: Cannot access 'sameName' before initialization

// NOTES

// var varibles automatically going to move top position that is is varible hoisiting ( var)
// function declartion whereever declared it will move to top position - that is function hoisting ( function)
// function expression could not call before initialialze

//let - update values

//const - constant values

// this initialization is called ( function hoisting) this declartion is before intiliaized function
hoistfunc();

function hoistfunc() {
  console.log("hoisting function called");
}

// functionExpersstion();
// functionArrowExpersstion();
// ReferenceError: Cannot access 'functionExpersstion' before initialization

let functionExpersstion = function test() {
  console.log("function Expersstion function called");
};

let functionArrowExpersstion = function test() {
  console.log("Arrow function Expersstion function called");
};

// hoistfunc();
functionExpersstion();
functionArrowExpersstion();
