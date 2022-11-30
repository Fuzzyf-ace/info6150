import '../css/Cards.css';
function Cards () {
    return (
        <div>
            <div className='cards'>
                <div className="cards__heading">
                    <h2>Perissodactyla</h2>
                </div>
                <div className="card card--1">
                    <h3 className="card__heading">Horse</h3>
                    <img src="https://images.unsplash.com/photo-1606107869722-d5cbadabe2f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="horse" className="card__img"/>
                    <div className="card__text">
                        Horses have been domesticated for at least 5000 years. They have been used by humans in many different ways for travel, work, food, and pleasure and show. Cavalry horses were used in the war until the middle 20th century. They are used for riding and transport. They are also used for carrying things, pulling carts, or helping plow farmer's fields in agriculture. People have used selective breeding to make bigger horses do heavy work.
                        <a href="https://en.wikipedia.org/wiki/Horse" className="card__about">More about horses...</a>
                    </div>
                </div>
                <div className="card card--2">
                    <h3 className="card__heading">Rhinoceros</h3>
                    <img src="https://images.unsplash.com/photo-1598894000396-bc30e0996899?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="rhinoceros" className="card__img"/>
                    <div className="card__text">
                        Rhinoceros is a large, heavily built plant-eating mammal with one or two horns on the nose and thick folded skin, native to Africa and southern Asia. All kinds have become endangered through hunting.
                        <a href="https://en.wikipedia.org/wiki/Rhinoceros" className="card__about">More about rhinoceroses...</a>
                    </div> 
                </div>
                <div className="card card--3">
                    <h3 className="card__heading">Tapir</h3>
                    <img src="https://images.unsplash.com/photo-1661640583963-fbf778bee625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="tapir" className="card__img"/>
                    <div className="card__text">
                        Tapir is a nocturnal hoofed mammal with a stout body, sturdy limbs, and a short flexible proboscis, native to the forests of tropical America and Malaysia. The proboscis of the tapir is a highly flexible organ, able to move in all directions, allowing the animals to grab foliage that would otherwise be out of reach. 
                        <a href="https://en.wikipedia.org/wiki/Tapir" className="card__about">More about Tapir...</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;