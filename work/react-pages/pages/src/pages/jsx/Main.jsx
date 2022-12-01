import '../css/Main.css';
import { useState } from 'react';
import Introduction from './Introduction';
import Cards from './Cards';
import NavBar from './NavBar';
import Panel from './Panel';

function Main () {
    const [ page, setPage ] = useState(`Introduction`);

    return (
        <main className="main">
            <NavBar setPage={setPage}/>
            { (page === `Introduction`) && <Introduction setPage={setPage}/>}
            { (page === `Cards`) && <Cards/>}
            { (page === `Panel`) && <Panel/>}
        </main>
    );
}
export default Main;