let H1= document.querySelectorAll("H1")
for(let val of H1){
    val.style.color="red"
}
let name=document.getElementById("Name")
// let nameData= prompt("Enter your name")
// name.innerText= "Name: "+nameData

//--------Input------------
let inp=document.getElementById("input")
let btn=document.querySelector("button")
let H2=document.querySelector("h2")
inp.addEventListener("input",(e)=>{
    btn.addEventListener("click",(f)=>{
        H2.innerText=e.target.value
    })
    
})