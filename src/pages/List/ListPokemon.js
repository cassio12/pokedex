import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import "./ListPokemon.css"
import axios from 'axios'
import Card from "./components/Card/Card";

const INITIAL_STATE = {
    pokeList: [],
    searchValue: '',
    favorites: [],
    isActive: false,
    itensPerPage: 10,
    currentPage: 0,
}

function ListPokemons() {
    const [pokedex, setPokedex] = useState(INITIAL_STATE);

    const pages = Math.ceil(pokedex.pokeList.length / pokedex.itensPerPage);
    const startIndex = pokedex.currentPage * pokedex.itensPerPage;
    const endIndex = startIndex + pokedex.itensPerPage;
    const currentPageItens = pokedex.pokeList.slice(startIndex, endIndex);

    const getAllPokemons = async() => {
        await axios.get(`https://unpkg.com/pokemons@1.1.0/pokemons.json`)
        .then((resp) => {
            setPokedex({...pokedex, pokeList: resp.data.results})
          })
          .catch((error) => {
          return error
        })
    }

    console.log(endIndex)

    const searchPokemon = () => {

    }

    const resetSearch = () => {
        setPokedex({...pokedex, searchValue:''})
    }

    useEffect(()=>{
        getAllPokemons()
    },[])

    return (
        <div className="pokedex">
            <h1 className="title-pokedex">Pokedex</h1>
            <Search 
            onValue={setPokedex} 
            pokedex={pokedex} 
            onSearch={searchPokemon}
            onCleanSearch={resetSearch}
            />
            <div>
                {Array.from(Array(pages), (item, index) => {
                    return (
                        <button 
                            value={index} 
                            onClick={(e) => setPokedex({...pokedex, currentPage: e.target.value})}
                            >
                            {index+1}
                        </button>
                    )
                })}
            </div>
            <div>
                <select value={pokedex.itensPerPage} onChange={(e) => setPokedex({...pokedex, itensPerPage: Number(e.target.value)})}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                {/* <div onClick={() =>  setPokedex({...pokedex, isActive: !pokedex.isActive})}> 
                    {pokedex.itensPerPage} {pokedex.isActive ? <p size={25} color={'#ccc'}>A</p> : <p size={25} color={'#ccc'}>v</p>}
                </div>
                {pokedex.isActive && (
                    <div >
                        <div onClick={(e) => {
                            setPokedex({...pokedex, itensPerPage: Number(e.target.textContent)})
                            setPokedex({...pokedex, isActive: false})
                        }}>
                            <span  id="dropdown-item-range-10"> 10 </span>
                        </div>
                        <deleteVideo onClick={(e) => {
                            setPokedex({...pokedex, itensPerPage: Number(e.target.textContent)})
                            setPokedex({...pokedex, isActive: false})
                        }}>
                            <span   id="dropdown-item-range-25" > 25 </span>
                        </deleteVideo>
                        <div onClick={(e) => {
                            setPokedex({...pokedex, itensPerPage: Number(e.target.textContent)})
                            setPokedex({...pokedex, isActive: false})
                        }}>
                            <span id="dropdown-item-range-50"> 50 </span>
                        </div>

                        <div onClick={(e) => {
                            setPokedex({...pokedex, itensPerPage: Number(e.target.textContent)})
                            setPokedex({...pokedex, isActive: false})
                        }}>
                            <span   id="dropdown-item-range-100"> 100 </span>
                        </div>
                    </div>
                )} */}
            </div>
            <div className="box-card-list">
                {currentPageItens.map((item, index) => <Card item={item} index={index} pokedex={pokedex}/>)}
            </div>
        </div>
    );
}

export default ListPokemons;
