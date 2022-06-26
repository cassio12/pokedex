import React from "react";

function DropDownPages({
onPokedex,
pokedex,
}) {
    
    return (
        <select value={pokedex.itensPerPage} onChange={(e) => onPokedex({...pokedex, itensPerPage: Number(e.target.value)})}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
        </select>
    );
}

export default DropDownPages;
