// =========================
// DOM READY
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // MOBILE MENU
    // =========================

    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    if (toggle && nav) {

        toggle.addEventListener("click", function (e) {

            e.stopPropagation();

            nav.classList.toggle("active");
            toggle.classList.toggle("active");

        });

    }

    // =========================
    // DROPDOWN MENUS
    // =========================

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (drop) {

        // VERY IMPORTANT FIX
        const btn = drop.querySelector(".guidance-btn");
        const menu = drop.querySelector(".dropdown-menu");

        if (!btn || !menu) return;

        btn.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            // Close all other dropdowns
            document.querySelectorAll(".dropdown-menu").forEach(function (otherMenu) {

                if (otherMenu !== menu) {
                    otherMenu.classList.remove("show");
                }

            });

            menu.classList.toggle("show");

btn.classList.toggle("active");

        });

        // Prevent closing when clicking inside menu

        menu.addEventListener("click", function (e) {

            e.stopPropagation();

        });

    });

    // =========================
    // CLOSE MENUS ON OUTSIDE CLICK
    // =========================

    document.addEventListener("click", function () {

        // Close dropdowns

        document.querySelectorAll(".dropdown-menu").forEach(function (menu) {

            menu.classList.remove("show");

        });

        // Close mobile nav

        if (nav) {

            nav.classList.remove("active");

        }

        // Reset hamburger

        if (toggle) {

            toggle.classList.remove("active");

        }

    });

    // =========================
    // CLOSE MOBILE MENU AFTER LINK CLICK
    // =========================

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {

                nav.classList.remove("active");

            }

            if (toggle) {

                toggle.classList.remove("active");

            }

        });

    });

    // =========================
    // CHARACTER COUNTER
    // =========================

    const textarea = document.getElementById("caseDescription");
    const counter = document.getElementById("charCount");

    if (textarea && counter) {

        // Initial value

        counter.textContent = textarea.value.length;

        textarea.addEventListener("input", function () {

            counter.textContent = textarea.value.length;

            // Warning color

            if (textarea.value.length > 450) {

                counter.style.color = "#dc2626";

            } else {

                counter.style.color = "#6b7280";

            }

        });

    }

    // =========================
    // SMOOTH SCROLL
    // =========================

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId.length > 1) {

                const target = document.querySelector(targetId);

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });

});
