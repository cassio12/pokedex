import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css"

function Search({
    onValue, 
    onSearch,
    onCleanSearch,
    pokedex,
}) {

    // console.log(pokedex.searchValue)

    return (
        <div className="box-search-bar">
            <input className="search-bar-input" onChange={(e) => onValue({...pokedex, searchValue: e.target.value})} type="text" value={pokedex.searchValue}/>
            {pokedex.searchValue ? <FontAwesomeIcon className="search-bar-clean-icon" icon={faCircleXmark} onClick={() => onCleanSearch()}/> : null}
            <div className="box-search-bar-magnifying_glass" onClick={()=> onSearch()}>
                <FontAwesomeIcon className="search-bar-magnifying_glass-icon" icon={faMagnifyingGlass}/>
            </div>
        </div>
    );
}

export default Search;
