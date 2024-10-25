const obj = [
    {
        name: "aaa",
        id: 1,
    },
    {
        name: "bbb",
        id: 2,
    }
]

const idValues = obj.map(item => item.id);
console.log(idValues); // Output: [1, 2]

const inputDate = '2024-03-15T07:49:24.547Z';

// Parse the input date string
const date = new Date(inputDate);

// Get the day, month, year, hours, and minutes
const day = date.getDate();
const month = date.getMonth() + 1; // Months are zero-based, so we add 1
const year = date.getFullYear();


// Format the date and time
const formattedDate = `${day}-${month}-${year}`;

console.log(formattedDate); // Output: 15-3-2024 7:49 am



console.log("obj", obj);