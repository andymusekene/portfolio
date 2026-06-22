const words = [
    "Software Developer",
    "Computer Engineering Student",
    "Spring Boot Enthusiast",
    "Arduino & Robotics Builder"
];

let wordIndex = 0;
let letterIndex = 0;

function type() {

    let currentWord = words[wordIndex];

    document.getElementById("typing").textContent =
        currentWord.substring(0, letterIndex);

    letterIndex++;

    if (letterIndex > currentWord.length) {

        letterIndex = 0;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
    }

}

setInterval(type, 100);

const topBtn = document.getElementById("topBtn");

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");
        }

    });

});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>observer.observe(el));

window.addEventListener("load",()=>{

    document.getElementById("loader").style.display="none";

});