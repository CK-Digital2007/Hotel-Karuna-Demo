/* =================================
   MOBILE NAVIGATION
================================= */

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =================================
   CLOSE MOBILE MENU AFTER CLICK
================================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =================================
   INTERACTIVE MENU TABS
================================= */

const menuTabs =
    document.querySelectorAll(".menu-tab");


const menuContents =
    document.querySelectorAll(".menu-content");


menuTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        /* Remove active button */

        menuTabs.forEach((button) => {

            button.classList.remove("active");

        });


        /* Hide all menu content */

        menuContents.forEach((content) => {

            content.classList.remove("active-menu");

        });


        /* Activate clicked button */

        tab.classList.add("active");


        /* Get selected category */

        const category =
            tab.dataset.category;


        /* Find selected menu */

        const selectedMenu =
            document.getElementById(category);


        /* Show selected menu */

        if (selectedMenu) {

            selectedMenu.classList.add(
                "active-menu"
            );

        }

    });

});