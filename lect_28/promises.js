function step1(fn){
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        console.log("Select the picture")
        resolve()
    }, 5000)
    })
}
function step2(fn){
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        console.log("Filter the picture")
        resolve()
    }, 4000)
    })
}
function step3(fn){
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        console.log("Add the captions")
        resolve()
    }, 3000)
    })
}
function step4(fn){
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        console.log("Post the picture")
        resolve()
    }, 2000)
})
}


async function call(){
    await step1()
    await step2()
    await step3()
    await step4()
    console.log("Picture Posted!!...")
}
call()






// let p = new Promise((resolve, reject) => {
//     // Simulating an API call with setTimeout
//     // resolve("Data received from API")
//     reject("Error: Failed to fetch data from API")
// })
// p.then(() => {
//     console.log("hellooo")
// }).catch((error) => {
//     console.error("error: ", error)
// })






// A Promise is essentially a placeholder for a value that you don't have yet but expect to receive in the future. -->

//  <!-- The Three States of a Promise
// 1) Pending: The initial state. The API request has been sent, but the server hasn't responded yet.
// 2) Fulfilled (Resolved): Success! The server responded with the data you asked for.
// 3) Rejected: Failure. The request failed (e.g., 404 error, network is down, or the server crashed). -->
//  <!-- Promises are used to handle asynchronous operations in JavaScript, such as API calls, file reading, or any operation that takes time to complete. They provide a cleaner and more manageable way to work with asynchronous code compared to callbacks. -->