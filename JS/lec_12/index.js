console.log("hello");

let btn= document.querySelector('button');
let body= document.querySelector('body');
let isDark=true

btn.addEventListener("click", function(){
    // console.log("helloo");
    // body.style.backgroundColor='lavender'
    if(isDark){
        body.style.backgroundColor='lavender'
    }
    else{
        body.style.backgroundColor='pink'
    }
    isDark=! isDark
})