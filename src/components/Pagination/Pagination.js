import React, { useEffect } from "react";

function Pagination({
onPokedex,
pokedex,
pages,
}) {

    useEffect(() => {
        onPokedex({...pokedex, currentPage: 0})
    }, [pokedex.itensPerPage]);
    
    return (
        <div style={{marginTop:'1rem'}}>
            {Array.from(Array(pages), (item, index) => {
                return (
                    <button 
                        key={index}
                        value={index} 
                        className={`currentPage ${pokedex.currentPage !== index ? "opacity_currentPage" : ''}`}
                        onClick={(e) => onPokedex({...pokedex, currentPage: Number(e.target.value)})}
                        >
                        {index+1}
                    </button>
                )           
            })}
        </div>
    );
}

export default Pagination;
