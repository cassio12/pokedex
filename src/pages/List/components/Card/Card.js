import React from "react";
import "./Card.css"

function Card({item}) {

    return (
        <div className="box-card">
            <img/>
            <p>{item.name}</p>
            <p></p>
            <p></p>
        </div>
    );
}

export default Card;
