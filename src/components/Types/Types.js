import React from "react";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { faFlaskRoundPoison } from "@fortawesome/free-solid-svg-icons";
// import { faCircleXmark } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Types({

}) {
    
    return (
        <div>
            <button>Normal <FontAwesomeIcon /></button>
            <button>Fogo <FontAwesomeIcon icon={faFire}/></button>
            <button>Água <FontAwesomeIcon icon={faDroplet}/></button>
            <button>Grama <FontAwesomeIcon icon={faLeaf}/></button>
            <button>Voador <FontAwesomeIcon icon={faDove}/></button>
            <button>Lutador <FontAwesomeIcon icon={faUserNinja}/></button>
            <button>Veneno <FontAwesomeIcon icon={faBolt}/></button>
            <button>Elétrico <FontAwesomeIcon icon={faBolt}/></button>
        </div>
    );
}

export default Types;
