import React from "react";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Card.css"

function Card({
    item, 
    index, 
    pokedex,
    onFavorite,
}) {

    const showFavorite = (str, index) => {
        let heart = document.getElementById(`heart-${index}`)
        if(str === 'dentro'){
            heart.classList.remove('card-favorite-icon-out')
            heart.classList.add('card-favorite-icon-in')
        }
        else {
            heart.classList.add('card-favorite-icon-out')
            heart.classList.remove('card-favorite-icon-in')
        }
        console.log(heart)
    }

    // console.log(item)
    return (
        <div key={index} className="box-card">
            <div >
                <img src={item.sprites.normal}/>
                <p>Nome: {item.name}</p>
                <p>Registro nacioal {item.national_number}</p>
                <p>Tipos: {item.type.join(', ')}</p>
            </div>
            <div className="box-favorite-icon" onMouseEnter={() => showFavorite('dentro', index)} onMouseOut={() => showFavorite('fora', index)}>
                {<FontAwesomeIcon id={`heart-${index}`} className={`${pokedex.favorites.id} === ${index} ? isFavorite : card-favorite-icon-out`} icon={faHeart} onClick={() => onFavorite(index)}/>  }
            </div>
        </div>
    );
}

export default Card;
