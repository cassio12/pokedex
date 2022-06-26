import React from "react";

function Pagination({
onPokedex,
pokedex,
pages,
}) {
    
    return (
        <div style={{marginTop:'1rem'}}>
            {Array.from(Array(pages), (item, index) => {
                return (
                    <button 
                        value={index} 
                        className={pokedex.currentPage === index ? "currentPage" : 'unCurrentPage'}
                        onClick={(e) => onPokedex({...pokedex, currentPage: e.target.value})}
                        >
                        {index+1}
                    </button>
                )           
            })}
        </div>
    );
}

export default Pagination;
