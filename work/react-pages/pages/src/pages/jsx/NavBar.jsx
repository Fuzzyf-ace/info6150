function NavBar ({setPage}) {

    function onNav (event, page){
        event.preventDefault();
        setPage(page);

        const li1 = document.querySelector(`.nav--li1`);
        const li2 = document.querySelector(`.nav--li2`);
        const li3 = document.querySelector(`.nav--li3`);
        li1.classList.remove(`nav--li1__active`);
        li2.classList.remove(`nav--li2__active`);
        li3.classList.remove(`nav--li3__active`);
        if (page === `Introduction`) {
            li1.classList.add(`nav--li1__active`);
        }
        if (page === `Cards`) {
            li2.classList.add(`nav--li2__active`);
        }
        if (page === `Panel`) {
            li3.classList.add(`nav--li3__active`);
        }
    }

    return (
        <nav className="nav">
            <ul className="nav--ul">
                <li className="nav--li1 nav--li1__active"><a href="/" onClick={(e) => onNav(e, "Introduction")}>Introduction</a></li>
                <li className="nav--li2"><a href="/" onClick={(e) => onNav(e, "Cards")}>Cards</a></li>
                <li className="nav--li3"><a href="/" onClick={(e) => onNav(e, "Panel")}>Details</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;