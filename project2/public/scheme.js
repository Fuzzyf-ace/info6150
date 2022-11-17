`use strict`;

(function() {
    const menuButton = document.querySelector(".hamburgermenu__button");
    const menu = document.querySelector(".hamburgermenu__menu");
    menuButton.addEventListener("click", function() {
        menu.classList.toggle("hamburgermenu__menu--open");
        if (menu.classList.contains(`hamburgermenu__menu--open`)) {//开启之前改成block
            menu.classList.remove("hamburgermenu__menu--close");
        } else {//关闭之后改成none
            menu.addEventListener(`transitionend`, (event) => {
                menu.classList.add(`hamburgermenu__menu--close`);
            });
            
        }
    });

})();