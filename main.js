// main.js
// Basic behaviours: dynamic year, smooth scroll, scroll animations and mobile menu

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;

        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
            event.preventDefault();
            targetEl.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Scroll animations using IntersectionObserver
// Elements that have [data-animate] will fade-in and slide up when entering viewport
const animatedElements = document.querySelectorAll("[data-animate]");

if ("IntersectionObserver" in window && animatedElements.length > 0) {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18,
        }
    );

    animatedElements.forEach((el) => observer.observe(el));
} else {
    // Fallback: just show everything if IntersectionObserver is not supported
    animatedElements.forEach((el) => el.classList.add("is-visible"));
}

// Mobile navigation (burger menu)
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
    burger.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("nav--open");
        burger.classList.toggle("burger--active", isOpen);
        burger.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu when a nav link is clicked
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("nav--open")) {
                nav.classList.remove("nav--open");
                burger.classList.remove("burger--active");
                burger.setAttribute("aria-expanded", "false");
            }
        });
    });
}

// Demo handler for contact form
// In production this should be replaced with real submission logic (API / email)
const contactForm = document.querySelector(".contact__form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Simple UX feedback
        alert(
            "This is a demo form. In a production setup this would send your enquiry to the CUMELT MAROC sales team."
        );

        contactForm.reset();
    });
}

/*
    Note on the molten copper animation:

    - The visual copper stream is implemented as a fixed positioned <div>. 
    - Its background is made from multiple layered gradients:
        • radial-gradients provide bright "hot" spots and reflections,
        • a vertical linear-gradient simulates the warm-to-hot copper color range.
    - background-size is set larger than the element and animated via the 'copperFlow'
      keyframes, shifting the gradient down and looping it back up.
    - A blur filter and glowing box-shadow make the strip appear soft and molten.
    - mix-blend-mode: screen lets it interact with the dark background without covering text.
    - On small screens opacity and width are reduced so the effect stays subtle and readable.
*/
