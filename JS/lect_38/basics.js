// ==========================================
        // 1. VARIABLES & DATA TYPES (Data Store Karna)
        // ==========================================
        const appName = "Task Master v1"; // String (const: value change nahi hogi)
        let totalTasksAdded = 0;          // Number (let: value change hogi)
        let isAppActive = true;           // Boolean

        console.log("App Name: " + appName); // Console me check karne ke liye

        // ==========================================
        // 2. ARRAYS & OBJECTS (Group Data)
        // ==========================================
        // Array: Tasks ki list
        let preDefinedTasks = ["Buy Milk", "Code in JS", "Read a Book", "Gym Time", "Sleep"];

        // Object: User ka data ek hi jagah
        let userProfile = {
            name: "Rahul",
            role: "Learner",
            experienceDays: 5
        };

        // ==========================================
        // 3. FUNCTIONS (Reusable Code Blocks)
        // ==========================================
        // Yeh function ek random task return karega array se
        function getRandomTask() {
            let randomIndex = Math.floor(Math.random() * preDefinedTasks.length);
            return preDefinedTasks[randomIndex];
        }

        // ==========================================
        // 4. DOM SELECTION (Elements ko pakadna)
        // ==========================================
        const titleEl = document.getElementById("main-title");
        const statusEl = document.querySelector("#status-text");
        const buttonEl = document.querySelector("#actionBtn");
        const containerEl = document.querySelector(".container");

        // UI update using Object Data
        titleEl.innerText = `${userProfile.name}'s ${appName}`;

        // Naya empty HTML list (<ul>) create karke container me append karna
        const taskListEl = document.createElement("ul");
        containerEl.appendChild(taskListEl);


        // ==========================================
        // 5. EVENT LISTENERS & LOGIC (User Actions)
        // ==========================================

        // --- CLICK EVENT ---
        buttonEl.addEventListener("click", () => {
            // Task count badhana
            totalTasksAdded = totalTasksAdded + 1; 

            // Function call karke random task lena
            let taskName = getRandomTask();

            // Naya <li> element (list item) banana aur usme text dalna
            let newListItem = document.createElement("li");
            newListItem.innerText = `${totalTasksAdded}. ${taskName}`;
            
            // List item ko <ul> ke andar chipkana
            taskListEl.appendChild(newListItem);

            // --- CONDITIONALS (if / else) ---
            if (totalTasksAdded >= 5) {
                statusEl.innerText = "Status: Super Productive Day! 🔥";
                statusEl.style.color = "orange";
            } else {
                statusEl.innerText = `Status: ${totalTasksAdded} task(s) added.`;
                statusEl.style.color = "green";
            }
        });

        // --- HOVER IN EVENT (Mouseenter) ---
        buttonEl.addEventListener("mouseenter", () => {
            buttonEl.style.backgroundColor = "#0056b3"; // Button dark blue ho jayega
            buttonEl.style.transform = "scale(1.05)";   // Button thoda bada hoga
        });

        // --- HOVER OUT EVENT (Mouseleave) ---
        buttonEl.addEventListener("mouseleave", () => {
            buttonEl.style.backgroundColor = "#007bff"; // Button wapas normal blue
            buttonEl.style.transform = "scale(1)";      // Size wapas normal
        });

        // ==========================================
        // 6. LOOPS (Ek hi kaam baar-baar karna)
        // ==========================================
        // Console me 1 se 3 tak counting print karne ke liye loop
        console.log("--- Starting Initialization Loop ---");
        for (let i = 1; i <= 3; i++) {
            console.log(`System Check Part ${i}... OK!`);
        }



// Isme aapne kya-kya seekha?
// Variables: appName, totalTasksAdded se data store kiya.

// Array & Object: preDefinedTasks se list banayi aur userProfile se user ka bio data group kiya.

// Function: getRandomTask() bana kar math logic ko ek reusable block me dala.

// DOM Selectors: getElementById aur querySelector se HTML ke titles aur buttons ko access kiya.

// Click Event: Button click karne par naye elements (createElement & appendChild) create karke list banayi.

// Hover Effect: mouseenter aur mouseleave se button par hover animation banayi.

// Conditionals: if (totalTasksAdded >= 5) se check kiya ki kab user ne 5 se zyada tasks add kar diye.

// Loops: for loop se terminal/console me automatic checks run kiye.