// --- 1. FUNCTION HOISTING ---
// During the Creation Phase, the entire function body is stored in memory.
// This allows us to call sum() before it is defined in the code.
sum(); 

function sum() {
    console.log("hii");
}

// --- 2. VARIABLE HOISTING ---
// During the Creation Phase, the engine sees 'var a' and allocates memory.
// It initializes 'a' with the default value of 'undefined'.
var a;

// In the Execution Phase, at this line, 'a' has not been assigned a value yet.
// Therefore, it logs 'undefined'.
console.log(a); 

// Finally, the value 5 is assigned to 'a'.
a = 5;

// If we logged 'a' here, it would print 5.
// console.log(a);