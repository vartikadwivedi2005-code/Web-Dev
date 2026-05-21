// // pure function
// let num = 0
// function double(){
//     return num*2
// }
// console.log(double(5));
// console.log(double(5));


// // impure function
// let count = 0 
// function fun1(){
//     count++
//     return count
// }

// console.log(fun1());
// console.log(fun1());
// console.log(fun1());


// cunning functions
// function sum(b){
//     return function(a){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(sum(6)(5)(4));




// function sum(a){
//     return function(b){
//         if(b){
//             return sum(a + b)

//         }
//         return a
//     }
// }

// console.log(sum(6)(5)(5)(3)(4)(7)());
// // 6+5=11+5=16+3=19+4=23+7=30


// spread operator(...)
// let arr=[1,2,3,4,5]
// let nums=[...arr,6,7,8]
// console.log(nums);

// rest operator (... as parameter)
// function sum(a,b,c,...nums){
//       console.log(arguments);
//     //   return a+b+c
// }
// sum(5,4,6,7,8,4,3,5,8,8,9);


// destructuring
let obj={
    id:1,
    name:"Vartika"
}
console.log(obj.name);
console.log(obj.id);


// let arr=[1,2,3,4,5,6]
// let [c,b,a]=arr
// console.log(a);






