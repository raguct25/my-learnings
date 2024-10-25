function outerFun(outerVar) {
  return function innerFun(innerVar) {
    console.log("innerVar", innerVar);
    console.log("outerVar", outerVar);
  };
}

const newFun = outerFun("outside");

newFun("inside*********");
