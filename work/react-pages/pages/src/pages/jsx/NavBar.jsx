function NavBar ({setPage}) {

    function onNav (event, page){
        event.preventDefault();
        setPage(page);
    }
    return (
        <nav className="nav">
            <ul className="nav--ul">
                <li><a href="/" onClick={(e) => onNav(e, "Introduction")}>Introduction</a></li>
                <li><a href="/" onClick={(e) => onNav(e, "Cards")}>Cards</a></li>
                <li><a href="/" onClick={(e) => onNav(e, "Panel")}>Details</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;