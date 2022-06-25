import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import "./ListPokemon.css"
import axios from 'axios'
import Card from "./components/Card/Card";

const INITIAL_STATE = {
    pokeList: [],
    searchValue: '',

}

function ListPokemons() {
    const [pokedex, setPokedex] = useState(INITIAL_STATE)


    const getAllPokemons = async() => {
        await axios.get(`https://unpkg.com/pokemons@1.1.0/pokemons.json`)
        .then((resp) => {
            setPokedex({...pokedex, pokeList: resp.data.results})
          })
          .catch((error) => {
          return error
        })
    }

    console.log(pokedex.searchValue)

    const searchPokemon = () => {

    }

    useEffect(()=>{
        getAllPokemons()
    },[])

    return (
        <div className="pokedex">
            <p>Lista de pokémon</p>
            <Search onValue={setPokedex} pokedex={pokedex} onSearch={searchPokemon}/>
            <div className="box-card-list">
                {pokedex.pokeList.map(item => <Card item={item}/>)}
            </div>
        </div>
    );
}

export default ListPokemons;
