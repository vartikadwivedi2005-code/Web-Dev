 // ======================================
        // 1. getElementById
        // ======================================

        let heading = document.getElementById("heading");

        console.log(heading);


        // ======================================
        // 2. getElementsByClassName
        // ======================================

        let text = document.getElementsByClassName("text");

        console.log(text);


        // ======================================
        // 3. getElementsByTagName
        // ======================================

        let paragraph = document.getElementsByTagName("p");

        console.log(paragraph);


        // ======================================
        // 4. querySelector
        // ======================================

        let box = document.querySelector(".box");

        console.log(box);


        // ======================================
        // 5. querySelectorAll
        // ======================================

        let allText = document.querySelectorAll(".text");

        console.log(allText);


        // ======================================
        // 6. innerText
        // ======================================

        console.log(heading.innerText);


        // ======================================
        // 7. innerHTML
        // ======================================

        box.innerHTML = "<h3>Hello Students</h3>";


        // ======================================
        // 8. onclick Event
        // ======================================

        function changeText(){

            heading.innerText = "Heading Changed Successfully";

        }


        // ======================================
        // 9. Change CSS using JS
        // ======================================
     
        function changeColor(){

            box.style.backgroundColor ="orange" ;
            box.style.color = "white";
          
        }

        

        // ======================================
        // 10. Toggle Theme
        // ======================================

        function toggleTheme(){

            document.body.classList.toggle("dark");

        }


        // ======================================
        // 11. Create Element
        // ======================================

        function addContent(){

            let newPara = document.createElement("p");

            newPara.innerText = "New Paragraph Added";

            document.body.appendChild(newPara);

        }


        // ======================================
        // 12. addEventListener
        // ======================================

        box.addEventListener("mouseenter", function(){

            box.style.backgroundColor = "green";
            box.style.color = "white";

        });


        box.addEventListener("mouseleave", function(){

            box.style.backgroundColor = "white";
            box.style.color = "black";

        });


        // ======================================
        // 13. Input Example
        // ======================================

        let input = document.createElement("input");

        input.placeholder = "Enter Name";

        document.body.appendChild(input);


        let btn = document.createElement("button");

        btn.innerText = "Show Name";

        document.body.appendChild(btn);


        btn.onclick = function(){

            alert(input.value);

        }


        // ======================================
        // END OF DOM LECTURE
        // ======================================







