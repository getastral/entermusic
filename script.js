const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownParents = document.querySelectorAll(".nav-links > li > a");

    dropdownParents.forEach((parent) => {
        parent.addEventListener("click", function (e) {
            const parentLi = this.parentElement;
            const isOpen = parentLi.classList.contains("open");

            if (parentLi.querySelector(".dropdown")) {
                e.preventDefault(); // Zabrání přesměrování

                // Zavře všechna otevřená menu
                document.querySelectorAll(".nav-links li").forEach((li) => {
                    li.classList.remove("open");
                });

                // Pokud menu nebylo otevřené, znovu jej otevře
                if (!isOpen) {
                    parentLi.classList.add("open");
                }
            }
        });
    });

    // Zavření menu při kliknutí mimo něj
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".nav-links")) {
            document.querySelectorAll(".nav-links li").forEach((li) => {
                li.classList.remove("open");
            });
        }
    });
});

