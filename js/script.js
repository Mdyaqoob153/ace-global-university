// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");
    }

});

// ==========================
// ANIMATED COUNTERS
// ==========================

const counters = document.querySelectorAll(".stats-section h2");

let started = false;

function startCounters() {

    counters.forEach(counter => {

        const text = counter.innerText;

        const target = parseInt(text.replace(/\D/g, ""));

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                if (text.includes("%")) {

                    counter.innerText = Math.ceil(count) + "%";

                } else if (text.includes("+")) {

                    counter.innerText = Math.ceil(count) + "+";

                } else {

                    counter.innerText = Math.ceil(count);
                }

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = text;
            }
        };

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats-section");

    if (!statsSection) return;

    const sectionTop = statsSection.offsetTop - 300;

    if (!started && window.scrollY > sectionTop) {

        startCounters();

        started = true;
    }

});

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }

        });

    },

    {
        threshold: 0.2
    }

);

document
.querySelectorAll(
".department-card, .course-card, .faculty-card, .facility-icon"
)
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ==========================
// ACTIVE NAV LINKS
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});

// ==========================
// CONTACT FORM
// ==========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you for contacting ACE Global University. We will reach out to you soon."
        );

        form.reset();

    });

}

// ==========================
// THEME TOGGLE + SAVE
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const themeBtn =
        document.getElementById("themeToggle");

    if (!themeBtn) return;

    // Load saved theme

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";
    }

    // Toggle Theme

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (
            document.body.classList.contains("dark-mode")
        ) {

            themeBtn.innerHTML = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeBtn.innerHTML = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );
        }

    });

});


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.querySelector(".top-btn");

if(topBtn){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 400){

            topBtn.style.opacity = "1";
            topBtn.style.visibility = "visible";

        }else{

            topBtn.style.opacity = "0";
            topBtn.style.visibility = "hidden";
        }

    });

    topBtn.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}