// var aa = 10;

// (function () {
//   // var aa; variable hoisted
//   console.log("aa", aa);
//   // var aa = 11;
//   if (aa === 10) {
//     // var aa = 11; // if declared aa varible at the top aa varible will hoisted
//     console.log("IF imediate function called", aa);
//   }
//   console.log("imediate function called", aa);
// })();

// expressionCall;
// declartionCall;

decFun();
// expFun();

const expFun = () => {
  console.log("function expression called");
  return "expFun";
};

function decFun() {
  console.log("function declartion called");
  return "decFun";
}

const arrowArqFun = (a, b) => {
  console.log("a+b is", arguments);
};

function arqFun(a) {
  console.log("arqFun", arguments);
}

expFun();
decFun();

arrowArqFun(1, 2);
arqFun("ragu");

const expressionCall = expFun();
const declartionCall = decFun();

console.log("expressionCall", expressionCall);

console.log("declartionCall", declartionCall);
