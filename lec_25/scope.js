{
    var a=20
    let b=30
}
console.log(a); // output is 20 bcz it is declared with var
// console.log(b); //ReferenceError: b is not defined bcz it is declared with let or const

function sum() {//if any variable declared inside the fuction are not accessable
    let c=40
    var d=50
}
// console.log(c);//ReferenceError: c is not defined
//console.log(d); //ReferenceError: d is not defined

if(false){
   let e=60
   var f=70
    
}else{
    console.log("heeehee");
    
}
// console.log(e);//ReferenceError: e is not defined
console.log(f);//undefine

//----------this operator----------
//this operatoronly works with simple function  not with arrow  function

console.log(this);//window 


let Student={
    id:1,
    name:"Deeps",
    isPass:true,
    sum:function (){
        console.log(this); //point to the object
        console.log("id:",this.id);
    }
}
for(let val in Student){
    console.log(Student[val]);
    
}
Student.sum()
// `use stict` //Scope.js:45 Uncaught TypeError: Student.sum(...) is not a function bcz using `use stict` it is mandatory to declare this inside the object otherwise without `use stict` it will show window
function hello() {
    console.log(this);
    
}
hello()

let id=20
let STudent={ //error due to arrow function
    id=2,
    name:"Aashi",
    isPass:true,
    sum:()=> {
        console.log(this.id);
        
    }
}
STudent.sum()



 let student={ 
    id:2,
    name:"Aashi",
    isPass:true,
    sum:function() {
       let s=()=>{
        console.log(this.id); 
       }
       s()  
    }
}
student.sum()