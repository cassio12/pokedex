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
            <button onClick={() => onFilterType('All')}>All <FontAwesomeIcon /></button>
            <button onClick={() => onFilterType('Normal')}>Normal <FontAwesomeIcon /></button>
            <button onClick={() => onFilterType('Fire')}>Fire <FontAwesomeIcon icon={faFire}/></button>
            <button onClick={() => onFilterType('Water')}>Water <FontAwesomeIcon icon={faDroplet}/></button>
            <button onClick={() => onFilterType('Grass')}>Grass <FontAwesomeIcon icon={faLeaf}/></button>
            <button onClick={() => onFilterType('Flying')}>Flying <FontAwesomeIcon icon={faDove}/></button>
            <button onClick={() => onFilterType('Fighting')}>Fighting <FontAwesomeIcon icon={faUserNinja}/></button>
            <button onClick={() => onFilterType('Poison')}>Poison <FontAwesomeIcon icon={faSkullCrossbones}/></button>
            <button onClick={() => onFilterType('Electric')}>Electric <FontAwesomeIcon icon={faBolt}/></button>
        </div>
    );
}

export default Types;
