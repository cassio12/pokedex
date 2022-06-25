import React, { useState, useEffect } from "react";

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
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        pokedex.favorites && pokedex.favorites?.map((item) => {
            if (item === index) {
                setIsFavorite(true);
            }
        })
    }, [pokedex.favorites])

    return (
        <div key={index} className="box-card">
            <div >
                <img src={item.sprites.normal}/>
                <p>Nome: {item.name}</p>
                <p>Registro nacioal {item.national_number}</p>
                <p>Tipos: {item.type.join(', ')}</p>
            </div>
            <div className="box-favorite-icon">
                {isFavorite === true ? 
                <FontAwesomeIcon onClick={() => onFavorite(index, isFavorite, setIsFavorite(!isFavorite))} id={`heart-${index}`} className='isFavorite' icon={faHeart} /> : 
                <FontAwesomeIcon onClick={() => onFavorite(index, isFavorite, setIsFavorite(!isFavorite))} id={`heart-${index}`} className='card-favorite-icon-out' icon={faHeart} />
                }
            </div>
        </div>
    );
}

export default Card;
