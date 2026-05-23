let input=document.querySelector("input")
let btns=document.querySelectorAll("button")

for(let btn of btns){
    btn.addEventListener("click",()=>{
        let btnText= btn.innerText
        // console.log(btnText);
        if(btnText==='C'){
            input.value=""
        }else if(btnText==='='){
            input.value=eval(input.value)
        }else if(btnText==='Del'){
            let str=input.value
              input.value=str.slice(0, -1)
        }else{
            input.value+=btnText
        }
        
    })
}