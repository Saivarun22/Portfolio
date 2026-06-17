

// ===============================
// Smooth scroll for navigation
// ===============================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===============================
// Typing Effect (Hero Section)
// ===============================
const text = "Java Full Stack Developer | Spring Boot | Backend Engineer";
let index = 0;

function typeEffect() {
    const heroText = document.querySelector(".hero p");

    if (heroText && index < text.length) {
        heroText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.addEventListener("load", () => {
    const heroText = document.querySelector(".hero p");
    if (heroText) heroText.innerHTML = "";
    typeEffect();
});


// ===============================
// Active Nav Highlight on Scroll
// ===============================
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
        }
    });
});


// ===============================
// Scroll Reveal Animation
// ===============================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll("section, .card, .skill").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// ===============================
// Contact Form Handling
// ===============================
function submitForm(event) {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    if (name && email && message) {
        alert(`Thank you ${name}, your message has been sent successfully!`);
        event.target.reset();
    } else {
        alert("Please fill all fields!");
    }
}
