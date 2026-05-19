let arr=[1,2,3,4.5,true,"hello"]
console.log(arr[5]);

//for in loop use to get index no

for(let i in arr){
    console.log(i);
    
}

//for of loop is use to get val of arr

for(let val of arr){
    console.log(val);
    
}

console.log([]==[]);//false bcz both has diff reference

//object

let Student_obj={
    name:"satyarth",
    year:2,
    age:21
}

console.log(Student_obj.name);
console.log(Student_obj.year);
console.log(Student_obj.age);

//GEC => global execution context

let a=5;
function sum() {
    let b=10;
    console.log(a);
    console.log(b);
    
}
sum();

//arroww function

let add=(x,y) => {
    console.log(x+y);
    
}
add(2,4)


SUM ()
function SUM() { //hello
     console.log("hello");
}

// Sum() //sum is not a function error
// var Sum=()=>{
//     console.log("hello");
    
// }

let c=5
function outer() {
    console.log(c);
    function inner() {
        console.log("hello");
        
    }
    inner()
}
outer()