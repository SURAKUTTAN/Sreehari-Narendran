// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

// Typing Animation
const headline = "Sreehari Narendran";
const subheadline = "Music Producer & Cybersecurity Enthusiast";
let headlineIndex = 0;
let subheadlineIndex = 0;

function typeHeadline() {
    if (headlineIndex < headline.length) {
        document.getElementById("typing-headline").textContent += headline.charAt(headlineIndex);
        headlineIndex++;
        setTimeout(typeHeadline, 100);
    } else {
        typeSubheadline();
    }
}

function typeSubheadline() {
    if (subheadlineIndex < subheadline.length) {
        document.getElementById("typing-subheadline").textContent += subheadline.charAt(subheadlineIndex);
        subheadlineIndex++;
        setTimeout(typeSubheadline, 100);
    }
}

typeHeadline();
async function fetchDailyQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        document.getElementById("quote-text").textContent = `"${data.content}"`;
        document.getElementById("quote-author").textContent = `- ${data.author}`;
    } catch (error) {
        console.error("Failed to fetch quote:", error);
        document.getElementById("quote-text").textContent = `"The only limit to our realization of tomorrow is our doubts of today."`;
        document.getElementById("quote-author").textContent = `- Franklin D. Roosevelt`;
    }
}

// Call the function to fetch and display a quote
fetchDailyQuote();