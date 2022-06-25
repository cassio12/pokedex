import React, { useEffect, useState } from "react";
import axios from 'axios'

const INITIAL_STATE = {
    pokeList: []

}

function ListPokemons() {
    const [pokedex, setPokedex] = useState(INITIAL_STATE)


    const getAllPokemons = async() => {
        await axios.get(`https://unpkg.com/pokemons@1.1.0/pokemons.json`)
        .then((resp) => {
            console.log(resp.data.results)
            setPokedex({...pokedex, pokeList: resp.data.results})
          })
          .catch((error) => {
          return error
        })
    }

    useEffect(()=>{
        getAllPokemons()
    },[])

    return (
        <div className="App">
            Lista de pokémon
        </div>
    );
}

export default ListPokemons;
