// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================


// ---------- 1. SMOOTH SCROLL ----------

// ---------- 1. SMOOTH SCROLL ----------

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const href = link.getAttribute("href");

        event.preventDefault();

        // Home par click karne par bilkul top par jao
        if (href === "#home") {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

        // Baaki sections ke liye
        else {

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// ---------- 2. ACTIVE NAVIGATION LINK ----------

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.style.color = "white";
        link.style.fontWeight = "normal";

        if (link.getAttribute("href") === "#" + current) {

            link.style.color = "rgb(170, 107, 228)";
            link.style.fontWeight = "bold";

        }

    });

});


// ---------- 3. RESUME BUTTON ----------

const buttons = document.querySelectorAll(".btn");

if (buttons.length >= 1) {

    buttons[0].addEventListener("click", function() {

        const resumeURL =
        "https://drive.google.com/file/d/1b1Why5R-13kPgdu_mdQQUehDpvL4CAxC/view?usp=drive_link";

        window.open(resumeURL, "_blank");

    });

}


// ---------- 4. GITHUB BUTTON ----------

if (buttons.length >= 2) {

    buttons[1].addEventListener("click", function() {

        // Baad me apna actual GitHub URL yaha paste karna
        const githubURL = "https://github.com/ramsha-wania";

        window.open(githubURL, "_blank");

    });

}


// ---------- 3. SCROLL REVEAL ANIMATION ----------

const boxes = document.querySelectorAll(".box");

boxes.forEach(function(box) {

    box.style.opacity = "0";
    box.style.transform = "translateY(40px)";
    box.style.transition = "all 0.8s ease";

});


function revealBoxes() {

    boxes.forEach(function(box) {

        const boxPosition = box.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if (boxPosition < screenPosition) {

            box.style.opacity = "1";
            box.style.transform = "translateY(0)";

        }

    });

}


window.addEventListener("scroll", revealBoxes);

revealBoxes();


// Initial styling for animation

boxes.forEach(function(box) {

    box.style.opacity = "0";

    box.style.transform = "translateY(40px)";

    box.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealBoxes);

revealBoxes();


// ---------- 6. BACK TO TOP BUTTON ----------

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);


// Button CSS using JavaScript

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#9c97f1";
topButton.style.color = "white";
topButton.style.fontSize = "25px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "1000";


// Show button when scrolling

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});


// Scroll to top

topButton.addEventListener("click", function() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});