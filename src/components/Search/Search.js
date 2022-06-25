import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search({
    onValue, 
    onSearch,
    pokedex,
}) {

    return (
        <div >
            <input onChange={(e) => onValue({...pokedex, search: e.target.value})} type="text"/>
            {/* <FontAwesomeIcon icon={faHome} /> */}
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=> onSearch()}/>
        </div>
    );
}

export default Search;
