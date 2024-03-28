let boxes = document.querySelectorAll(".box");
let clicked = true;
let checkers = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
};
let count = 0;
let audio = new Audio("audio.wav")
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (clicked) {
            box.innerText = "X";
            
            box.style.color = "rgb(255, 120, 130)"
        } else {
            box.innerText = "O";
            box.style.color = "rgb(100, 178, 250)"
        }
        if (box.getAttribute("data-value") == "1") {
            checkers.one = box.innerText;
        }
        if (box.getAttribute("data-value") == "2") {
            checkers.two = box.innerText;
        }
        if (box.getAttribute("data-value") == "3") {
            checkers.three = box.innerText;
        }
        if (box.getAttribute("data-value") == "4") {
            checkers.four = box.innerText;
        }
        if (box.getAttribute("data-value") == "5") {
            checkers.five = box.innerText;
        }
        if (box.getAttribute("data-value") == "6") {
            checkers.six = box.innerText;
        }
        if (box.getAttribute("data-value") == "7") {
            checkers.seven = box.innerText;
        }
        if (box.getAttribute("data-value") == "8") {
            checkers.eight = box.innerText;
        }
        if (box.getAttribute("data-value") == "9") {
            checkers.nine = box.innerText;
        }
        if (box.innerText == "X" || box.innerText == "O") {
            box.style.pointerEvents = "none";
        }
        clicked = !clicked;
        //count++;

        
        if(checkers.one == "X" && checkers.two == "X"){
            if(checkers.three == "X"){
                document.getElementById("xscore").innerText++
               
                document.getElementById("one").style.backgroundColor = "green"
                document.getElementById("two").style.backgroundColor = "green"
                document.getElementById("three").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        if(checkers.one == "X" && checkers.five == "X"){
            if(checkers.nine == "X"){
                document.getElementById("xscore").innerText++
                document.getElementById("one").style.backgroundColor = "green"
                document.getElementById("five").style.backgroundColor = "green"
                document.getElementById("nine").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        if(checkers.one == "X" && checkers.four == "X"){
            if(checkers.seven == "X"){
                document.getElementById("xscore").innerText++
                document.getElementById("one").style.backgroundColor = "green"
                document.getElementById("four").style.backgroundColor = "green"
                document.getElementById("seven").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        if(checkers.four == "X" && checkers.five == "X"){
            if(checkers.six == "X"){
                document.getElementById("xscore").innerText++
                document.getElementById("four").style.backgroundColor = "green"
                document.getElementById("five").style.backgroundColor = "green"
                document.getElementById("six").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        if(checkers.seven == "X" && checkers.eight == "X"){
            if(checkers.nine == "X"){
                document.getElementById("xscore").innerText++
                document.getElementById("seven").style.backgroundColor = "green"
                document.getElementById("eight").style.backgroundColor = "green"
                document.getElementById("nine").style.backgroundColor = "green"
               boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                }) 
                audio.play()
            }
        }
        if(checkers.three == "X" && checkers.six == "X"){
            if(checkers.nine == "X"){
                document.getElementById("xscore").innerText++
                document.getElementById("three").style.backgroundColor = "green"
                document.getElementById("six").style.backgroundColor = "green"
                document.getElementById("nine").style.backgroundColor = "green"
               boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                }) 
                audio.play()
            }
        }
        if(checkers.two == "X" && checkers.five == "X"){
            if(checkers.eight == "X"){
                document.getElementById("xscore").innerText++
                document.getElementById("two").style.backgroundColor = "green"
                document.getElementById("five").style.backgroundColor = "green"
                document.getElementById("eight").style.backgroundColor = "green"
               boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                }) 
                audio.play()
            }
        }
        
        if(checkers.three == "X" && checkers.five == "X"){
            if(checkers.seven == "X"){
                document.getElementById("xscore").innerText++
                document.getElementById("three").style.backgroundColor = "green"
                document.getElementById("five").style.backgroundColor = "green"
                document.getElementById("seven").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        
        // O games below 
        if(checkers.three == "O" && checkers.five == "O"){
            if(checkers.seven == "O"){
                document.getElementById("oscore").innerText++
                document.getElementById("three").style.backgroundColor = "green"
                document.getElementById("five").style.backgroundColor = "green"
                document.getElementById("seven").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        
        if(checkers.one == "O" && checkers.two == "O"){
            if(checkers.three == "O"){
                document.getElementById("oscore").innerText++
                document.getElementById("one").style.backgroundColor = "green"
                document.getElementById("two").style.backgroundColor = "green"
                document.getElementById("three").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        if(checkers.one == "O" && checkers.five == "O"){
            if(checkers.nine == "O"){
                document.getElementById("oscore").innerText++
                document.getElementById("one").style.backgroundColor = "green"
                document.getElementById("five").style.backgroundColor = "green"
                document.getElementById("nine").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        if(checkers.one == "O" && checkers.four == "O"){
            if(checkers.seven == "O"){
                document.getElementById("oscore").innerText++
                document.getElementById("one").style.backgroundColor = "green"
                document.getElementById("four").style.backgroundColor = "green"
                document.getElementById("seven").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        if(checkers.four == "O" && checkers.five == "O"){
            if(checkers.six == "O"){
                document.getElementById("oscore").innerText++
                document.getElementById("four").style.backgroundColor = "green"
                document.getElementById("five").style.backgroundColor = "green"
                document.getElementById("six").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        if(checkers.seven == "O" && checkers.eight == "O"){
            if(checkers.nine == "O"){
                document.getElementById("oscore").innerText++
                document.getElementById("seven").style.backgroundColor = "green"
                document.getElementById("eight").style.backgroundColor = "green"
                document.getElementById("nine").style.backgroundColor = "green"
               boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        if(checkers.three == "O" && checkers.six == "O"){
            if(checkers.nine == "O"){
                document.getElementById("oscore").innerText++
                document.getElementById("three").style.backgroundColor = "green"
                document.getElementById("six").style.backgroundColor = "green"
                document.getElementById("nine").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        if(checkers.two == "O" && checkers.five == "O"){
            if(checkers.eight == "O"){
                document.getElementById("oscore").innerText++
                document.getElementById("two").style.backgroundColor = "green"
                document.getElementById("five").style.backgroundColor = "green"
                document.getElementById("eight").style.backgroundColor = "green"
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })
                audio.play()
            }
        }
        
        
    });
});



let button = document.getElementById("button")
button.addEventListener("click",() => {
    boxes.forEach((box) => {
        box.innerText = ""
        box.style.pointerEvents = "auto"
        box.style.backgroundColor = "hsl(0, 0%, 20%)"
        for (let items in checkers) {
                checkers[items] = false
            }
    })
        clicked = true;
})




document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.getElementById('overlay-container');
  
  overlay.style.opacity = 1;
  
  setTimeout(() => {
    
    overlay.style.opacity = 0;
    setTimeout(() => {
        overlay.style.display = "none"
    },4000)
  }, 5000); 
});

const icon = document.getElementById("icon")

icon.addEventListener("click",() => {
    window.location.reload()
})

