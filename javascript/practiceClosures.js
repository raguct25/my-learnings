const globalName = "ragu";

function outerfuntion() {
  console.log("access outerfuntion", globalName);

  const innerFunction = () => {
    console.log("access innerFunction", globalName);

    function innerInnerFun() {
      console.log("access innerInnerFun innerFunction", globalName);
    }
    innerInnerFun();
  };

  const innerSecondFunction = () => {
    console.log("access innerSecondFunction", globalName);
  };

  //   innerFunction(); // uncomment this also test it outerfuntion();
  //   innerSecondFunction();
  return { innerFunction, innerSecondFunction };
}

// outerfuntion();

const outerfun = outerfuntion();

outerfun;

// outerfun.innerFunction(); // if want access innner functions you should declare outerfun()
