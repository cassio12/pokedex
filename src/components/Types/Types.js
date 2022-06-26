import React from "react";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Types({
onFilterType,
}) {
    
    return (
        <div>
            <button onClick={() => onFilterType('Todos')}>Todos <FontAwesomeIcon /></button>
            <button onClick={() => onFilterType('Normal')}>Normal <FontAwesomeIcon /></button>
            <button onClick={() => onFilterType('Fire')}>Fogo <FontAwesomeIcon icon={faFire}/></button>
            <button onClick={() => onFilterType('Water')}>Água <FontAwesomeIcon icon={faDroplet}/></button>
            <button onClick={() => onFilterType('Grass')}>Grama <FontAwesomeIcon icon={faLeaf}/></button>
            <button onClick={() => onFilterType('Flying')}>Voador <FontAwesomeIcon icon={faDove}/></button>
            <button onClick={() => onFilterType('Fighting')}>Lutador <FontAwesomeIcon icon={faUserNinja}/></button>
            <button onClick={() => onFilterType('Poison')}>Veneno <FontAwesomeIcon icon={faSkullCrossbones}/></button>
            <button onClick={() => onFilterType('Electric')}>Elétrico <FontAwesomeIcon icon={faBolt}/></button>
        </div>
    );
}

export default Types;
