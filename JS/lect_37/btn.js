// Dono elements ko unki ID se select kiya
        const actionBtn = document.getElementById("actionBtn");
        const magicBox = document.getElementById("box");

        // Jab button par hover hoga -> Box me badlav aayega
        actionBtn.addEventListener("mouseenter", () => {
            magicBox.innerText = "BOOM! 💥";
            magicBox.style.backgroundColor = "purple";
            magicBox.style.transform = "scale(1.3)"; // Box 1.3 guna bada ho jayega
        });

        // Jab button se mouse hatega -> Box wapas normal ho jayega
        actionBtn.addEventListener("mouseleave", () => {
            magicBox.innerText = "Normal Box";
            magicBox.style.backgroundColor = "crimson";
            magicBox.style.transform = "scale(1)"; // Normal size
        });