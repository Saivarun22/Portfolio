// Typing Effect

const words = [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "Backend Engineer",
    "SQL Developer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = words[i];

    if (!isDeleting) {

        document.querySelector(".typing").textContent =
            current.substring(0, j++);

        if (j > current.length) {

            isDeleting = true;

            setTimeout(type, 1000);

            return;

        }

    } else {

        document.querySelector(".typing").textContent =
            current.substring(0, j--);

        if (j < 0) {

            isDeleting = false;

            i++;

            if (i == words.length)
                i = 0;

        }

    }

    setTimeout(type, isDeleting ? 60 : 120);

}

type();


// Scroll Reveal

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.href.includes(current))

            link.classList.add("active");

    });

});


// Back To Top

const btn = document.getElementById("topBtn");

window.onscroll = () => {

    if (document.documentElement.scrollTop > 300)

        btn.style.display = "block";

    else

        btn.style.display = "none";

};

btn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
