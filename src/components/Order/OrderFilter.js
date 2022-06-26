import React from "react";

function OrderFilter({
onPokedex,
pokedex,
}) {
    
    return (
        <select value={pokedex.order} onChange={(e) => onPokedex({...pokedex, order: e.target.value})}>
            <option value="ascending">ascendente</option>
            <option value="descending">descendente</option>
        </select>
    );
}

export default OrderFilter;
