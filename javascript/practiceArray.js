// 1). at - method (get particular index item)

// The at method is return an index item (value) Postive & Negative number
// if pass pastive number its start from first index order the index start from 0, 1, 2, 3
// if pass negative number its start from last index order the index start from -1, -2, -3
const a = ["ragu", 35, "MCA", "YAVAR"];

//ARRAY.at(INDEX)

console.log(a.at(0)); // ragu
console.log(a.at(-1)); // YAVAR
console.log(a.at(-5)); // undefined

// 2). concat - method (merge two or more arrays) it will return new array and not affect old array

// ARRAY.concat(ARRAY,ARRAY,ARRAY, .....)

const b = ["ganhi", 20, "BSC", "CT"];
const num = [1, 20, 2, 40];

console.log("concat", a.concat(b, num));
console.log("concat a array", a);
