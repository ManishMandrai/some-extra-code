// //File Download Simulation
// function downloadFile(url,callback){
//     console.log(`Downloading the file from ${url}...`);
//     setTimeout(()=> {
//         const file = "Logo.png"
//         console.log("Download complete.");
//         callback(file)
//     }, 3000)
// }

// function processFile(file){
//     console.log (`Processing ${file}...`);
// }

// downloadFile("https://www.google.com/Logo.png", processFile)


// //. Promises
// function fetchData (){
//     return new Promise((resolve, reject) => {
//         console.log("Fetching Daataaa.....");
//         setTimeout(() => {
//             const success = false; //true
//             if(success){
//                 resolve("data recived!")
//             }else{
//                 reject("Error: Failed to fetch data")
//             }
//         }, 3000)
//     })
// }

// fetchData()
//     .then(response => console.log(response))
//     .catch(error =>console.log(error));


// // Async/Await
// function fetchData (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = false; //true
//             if (success) {
//                 resolve("Data recived!!!")
//             }else{
//                 reject("Error: Failed to fetch data")
//             }
//         }, 2000)
//     })
// }

// async function getData (){
//     try {
//         console.log("Fetching Data...");
//         const data = await fetchData()
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getData()


// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json()) // Response ko JSON mein convert kiya
//     .then(data => console.log(data))   // Data ko console par print kiya
//     .catch(error => console.error("Error:", error));


//     // Ensure you have Axios installed or include via CDN
// axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(response => console.log(response.data))
//     .catch(error => console.error("Error:", error));



try {
    let result = 10/10;
    console.log("Result", result)
    let x = y
} catch (error) {
    console.log("An error occured", error.message);
    
}

try {
    let age = -9
    if (age < 0){
        throw new Error("Age can't be -ve")
    }
} catch (error) {
    console.log("Error", error.message);
    
}