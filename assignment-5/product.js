fetch("https://dummyjson.com/products").then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data.products);
   let body= document.querySelector("body")
    data.products.map((a)=>{
        body.innerHTML+=`<div style="border:1px solid black;
        width:250px; padding:10px; margin:10px; ">
        <img src="${a.
            thumbnail
            }" width="100%" >
        <h2> ${a.title}</h2>
        <h3> ${a.price}</h3>
        <h4> ${a.return}</h4>
        <h5> ${a.rating}</h5>
        <button onclick="addToCart(${a.id})"> add </button>
        `
        // console.log(a.brand
        window.allP=data.products
    })
})

let cart=[]
function addToCart(id){
    console.log(id);
    // console.log(window);
     let data=   window.allP.find((a)=>{
            return a.id==id
        })
        cart.push(data)
        // console.log(data,"data");
        localStorage.setItem("item",JSON.stringify(cart))
           
}