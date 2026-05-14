//  Callback - Callback is a function that is passed as an argument to another function and is executed after some operation has been completed. It is used to handle asynchronous operations in JavaScript.


function step1(fn){
    setTimeout(() => {
        console.log("Select the picture")
        fn()
    }, 5000)
}
function step2(fn){
    setTimeout(() => {
        console.log("Filter the picture")
        fn()
    }, 4000)
}
function step3(fn){
    setTimeout(() => {
        console.log("Add the captions")
        fn()
    }, 3000)
}
function step4(fn){
    setTimeout(() => {
        console.log("Post the picture")
        fn()
    }, 2000)
}


step1(function(){
    step2(function(){
        step3(function(){
            step4(function(){
                console.log("All steps are done")
            })
        })
    })
})