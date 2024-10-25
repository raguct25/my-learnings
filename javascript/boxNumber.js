let num = "095";

const calculationBox = () => {
  console.log("num", num);
  let output = num.split("").map(Number);
  console.log("output", output);
  const newArr = [];

  output.map((n, index) => {
    console.log("index", index);
    console.log("n", n);
  });
};

function permute(input) {
  let result = [];

  function generatePermutations(arr, index) {
    console.log("arr", arr.length - 1, index);
    if (index === arr.length - 1) {
      result.push(arr.slice());
      //   console.log("result", result);
      return;
    }

    for (let i = index; i < arr.length; i++) {
      [arr[index], arr[i]] = [arr[i], arr[index]]; // Swap elements
      generatePermutations(arr, index + 1);
      [arr[index], arr[i]] = [arr[i], arr[index]]; // Backtrack
    }
  }

  const inputArray = Array.from(String(input)).map(Number);
  console.log("inputArray", inputArray);
  generatePermutations(inputArray, 0);

  return result.map((perm) => {
    console.log("perm", perm);
    // return parseInt(perm.join(""));
    return perm.join("");
  });
}

// const array = ["1234", "3456"];

let input = "595";
let output = permute(input);

calculationBox();

//avoid duplicate
let test = [...new Set(output)];
console.log("output -> ", output);

console.log("filtered -> ", test);
