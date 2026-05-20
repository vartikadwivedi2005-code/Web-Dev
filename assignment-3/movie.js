let input=document.querySelector("input");
let btn=document.querySelector("button");
let list=document.querySelector("#list");

btn.addEventListener("click",()=>{
    let data=input.value;

    fetch(`https://api.tvmaze.com/search/shows?q=${data}`)
        .then((info)=>{
            return info.json();

        }).then((val)=>{
            console.log(val[0].show.image.original);
            show(val);

        }).catch((error)=>{
            console.error("Error: ", error);
})
})


function show(val){

    for(let i of val){
            let img=document.createElement("img");
            console.log(i.show.image.original);
            img.setAttribute("src",i.show.image.original);
            list.appendChild(img);
    }
    show(val);
        //  list.getAttribute("id");
        //  val.forEach((element)=>{
        // let img=document.createElement("img");
        // img.src=element.show.image.original;
        // list.appendChild(img);
    }

