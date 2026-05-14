let p = new Promise((resolve, reject) => {
    // Simulating an API call with setTimeout
    resolve("Data received from API")
    // reject("Error: Failed to fetch data from API")
})
p.then(() => {
    console.log("hellooo")
}).catch((error) => {
    console.error("error: ", error)
})