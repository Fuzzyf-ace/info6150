`use strict`;

(function() {
    const menuButton = document.querySelector(".menu__button");
    const menu = document.querySelector(".header__menu");
    menuButton.addEventListener("click", function() {
        menu.classList.toggle("header__menu--open");
    });
})();