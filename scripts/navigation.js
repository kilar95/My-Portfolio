const nav = document.querySelector(".top-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-visible")

    if (isOpen === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

    console.log(isOpen);
})

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener("click", () => {
        const isOpen = nav.getAttribute("data-visible");

        if (isOpen === "true") {
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        } else {
            return;
        }
    })
})