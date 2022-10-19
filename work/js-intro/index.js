"use strict";
(function() {
    const menuButton = document.querySelector(".menu__button");
    const menu = document.querySelector(".menu__navigation");
    menuButton.addEventListener("click", function() {
        menu.classList.toggle("menu__navigation--open");
    });
})();
