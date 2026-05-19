// Step 1: Button ko ID ke zariye select kiya
        const myButton = document.getElementById("hoverBtn");

        // Step 2: Hover In (Jab mouse button ke UPAR aayega)
        myButton.addEventListener("mouseenter", () => {
            myButton.innerText = "Wow! Mouse Aa Gaya!";
            myButton.style.backgroundColor = "black";
            myButton.style.color = "white";
        });

        // Step 3: Hover Out (Jab mouse button se BAHAR jayega)
        myButton.addEventListener("mouseleave", () => {
            myButton.innerText = "Mujh par Mouse Lao!";
            myButton.style.backgroundColor = "white";
            myButton.style.color = "black";
        });