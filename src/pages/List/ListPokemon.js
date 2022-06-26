import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import "./ListPokemon.css"
import axios from 'axios'
import Card from "./components/Card/Card";
import Types from "../../components/Types/Types";

const INITIAL_STATE = {
    pokeList: [],
    searchValue: '',
    favorites: [0, 2],
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

    const searchPokemon = () => {
        if(pokedex.searchValue){
            let tempValue = pokedex.pokeList.filter(item => {
                if(item.name.toLowerCase().includes(pokedex.searchValue.toLowerCase())){
                    return item.name
                }
                else {
                    return item.national_number.includes(pokedex.searchValue)
                }
            })
            setPokedex({...pokedex, pokeList: tempValue})
        }
        else {
            getAllPokemons()
        }
    }

    const favoritePokemon = (id, isFavorite) => {
        if(isFavorite === false){
            console.log(true)
            setPokedex({...pokedex, favorites: [...pokedex.favorites, id]})
        }
        else {
            let tempFav = pokedex.favorites.filter(item => item !== id)
            setPokedex({...pokedex, favorites: tempFav})
        }
    }

    const resetSearch = () => {
        setPokedex({...pokedex, searchValue:''})
    }

    useEffect(()=>{
        getAllPokemons()
    },[pokedex.searchValue])

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
                <div>
                    <select value={pokedex.itensPerPage} onChange={(e) => setPokedex({...pokedex, itensPerPage: Number(e.target.value)})}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                <Types/>
            </div>
            <div className="box-card-list">
                {currentPageItens.map((item, index) => <Card item={item} index={index} pokedex={pokedex} onFavorite={favoritePokemon}/>)}
            </div>
        </div>
    );
}

export default ListPokemons;
