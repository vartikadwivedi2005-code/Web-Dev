console.log("hiii");

let btn = document.querySelector("button")
let body=document.querySelector("body")
let color=["yellow","pink","orange","blue","skyblue"]
btn.addEventListener("click",()=>{
    body.style.backgroundColor=color[Math.floor(Math.random()*5)]
})

let h1=document.getElementsByClassName("text")
btn.addEventListener("click",()=>{
    for(let val of h1){
        val.style.color="green"
    }
})

console.log(h1[0]);