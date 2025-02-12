// function outerFun(outerVar) {
//   return function innerFun(innerVar) {
//     console.log("innerVar", innerVar);
//     console.log("outerVar", outerVar);
//   };
// }

// const newFun = outerFun("outside");

// newFun("inside*********");

console.log("Start");

// Time-consuming operation (e.g., network request)
const result = fetchDataFromServer();

function fetchDataFromServer() {
  setTimeout(() => {
    return "ragu";
  }, 5000);
}

console.log(result); // Output depends on when fetchDataFromServer() completes
console.log("End");
