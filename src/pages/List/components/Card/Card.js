import React, { useState, useEffect } from "react";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Card.css"

function Card({
    item, 
    id, 
    favorites,
    onFavorite,
}) {
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        favorites.favorites && favorites.favorites?.map((item) => {
            if (item.id === id) {
                setIsFavorite(true);
                console.log(favorites.currentPage)
            }
        })
    }, [favorites.currentPage])
    

    return (
        <div key={id} className="box-card">
            <div >
                <img src={item.sprites.normal}/>
                <p>Nome: {item.name}</p>
                <p>Registro nacional {item.national_number}</p>
                <p>Tipos: {item.type?.join(', ')}</p>
            </div>
            <div id={id} className="box-favorite-icon">
                {isFavorite ? 
                <FontAwesomeIcon id={id} onClick={() => onFavorite(id, isFavorite, setIsFavorite(!isFavorite))} className='isFavorite' icon={faHeart} /> : 
                <FontAwesomeIcon id={id} onClick={() => onFavorite(id, isFavorite, setIsFavorite(!isFavorite))} className='card-favorite-icon-out' icon={faHeart} />
                }
            </div>
        </div>
    );
}

export default Card;
