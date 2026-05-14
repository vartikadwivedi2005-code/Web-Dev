fetch("https://jsonplaceholder.typicode.com/todos")
.then((data) => {
    return data.json()
}).then((data) => {
    console.log(data)
    h2 = document.querySelector("h2")
    h2.innerText = data[4].title
}).catch((error) => {
    console.error("Error: ", error)
})





// fetch is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server. It returns a Promise that resolves to the Response object representing the response to the request. You can use the .then() method to handle the response and extract the data you need, and the .catch() method to handle any errors that may occur during the request.