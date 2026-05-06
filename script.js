const texts = [
    "Web Developer...",
    "Creative Designer...",
    "Tech Enthusiast..."
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;
    }

    setTimeout(type, 150);

})();

/* CLOCK */

function updateClock(){

    const now = new Date();

    document.getElementById("clock")
    .innerHTML = now.toLocaleTimeString();

    const hour = now.getHours();

    let greeting = "";

    if(hour < 12){

        greeting = "Good Morning 👋";

    }

    else if(hour < 18){

        greeting = "Good Afternoon 👋";

    }

    else{

        greeting = "Good Evening 👋";

    }

    document.getElementById("greeting")
    .innerHTML = greeting;

}

setInterval(updateClock,1000);

updateClock();

/* THEME */

const toggle =
document.getElementById("themeToggle");

toggle.onclick = () => {

    document.body.classList.toggle("light-mode");

};