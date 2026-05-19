 // 2. Sabse pehle JS mein us button ko select kiya querySelector se
        const btn = document.querySelector("#colorBtn");

        // 3. Aapka colors ka array
        let color = ["lightgreen", "pink", "yellow", "orange"];

        // 4. Event Listener jo aapne likha tha (with closing brackets fixed)
        btn.addEventListener("click", () => {
            console.log("color changed!!");
            
            // Random index generate karke background color change ho raha hai
            document.body.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
        });