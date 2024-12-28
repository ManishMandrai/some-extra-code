// const user = { name: "Manish", age: 24, country: "Imdia" };

// console.log("User Info", user);
// console.error("This is an error message");
// console.warn("Thus is a warning message");
// console.table([
//     { name: "Rohit", age: 23 },
//     { name: "Raul", age: 25 }
// ])


// function calculateSum(a, b) {
//     let sum = a + b;
//     return sum;
// }
// console.log(calculateSum(45, 20));


// function divide(a, n) {
//     try {
//         if (n === 0) {
//             throw new Error("Can't divided by zero")
//         }
//         return a / n;
//     } catch (error) {
//         console.error(error.message);
//     };
// };

// console.log(divide(10, 5));
// console.log(divide(10, 0));


// const product = { id: 1001, name: "Laptop", price: 23455 }
// console.log("product details", product);
// console.warn("stock is running low");
// console.error("Unable to fetch stock details");


// function printNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         console.log("Number:", i);
//     }
// }

// printNumbers(5);


function outerFunction(){
    try {
        innerFunction();
    } catch (error) {
        console.error("Error in outerFunction", error.message);
    }
}
function innerFunction(){
    try {
        let x = y
    } catch (error) {
        console.error("Error in innerFUnction", error.message);
        throw error        
    }
}

outerFunction()