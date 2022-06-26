import React, { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../../components/Search/Search";
import "./ListPokemon.css"
import axios from 'axios'
import Card from "./components/Card/Card";
import Types from "../../components/Types/Types";

const INITIAL_STATE = {
    pokeList: [],
    filterList: [],
    searchValue: '',
    favorites: [
        {
            attack: 82,
            defense: 83,
            evolution: null,
            hp: 80,
            id: 4,
            name: "Venusaur",
            national_number: "003",
            sp_atk: 100,
            sp_def: 100,
            speed: 80,
            sprites: {
                normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png', 
                large: 'https://img.pokemondb.net/artwork/venusaur.jpg', 
                animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif'
            },
            total: 525,
            type: ['Grass', 'Poison']
        },
    ],
    isActive: false,
    itensPerPage: 50,
    currentPage: 0,
}

function ListPokemons() {
    const [pokedex, setPokedex] = useState(INITIAL_STATE);

    const pages = Math.ceil(pokedex.filterList.length / pokedex.itensPerPage);
    const startIndex = pokedex.currentPage * pokedex.itensPerPage;
    const endIndex = startIndex + pokedex.itensPerPage;
    const currentPageItens = pokedex.filterList.slice(startIndex, endIndex);

    const getAllPokemons = async() => {
        await axios.get(`https://unpkg.com/pokemons@1.1.0/pokemons.json`)
        .then((resp) => {
            let data = resp.data.results
            let tempID;
            let tempListPokemons = []
            for(let i = 0; i < data.length; i++){
                tempID = {id: i+1} 
                tempListPokemons.push(Object.assign(data[i], tempID))
            }
            setPokedex({...pokedex, pokeList: tempListPokemons})
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
            pokedex.pokeList.filter(item => {
                if(id === item.id){
                    setPokedex({...pokedex, favorites: [...pokedex.favorites, item]})
                }
            })
        }
        else {
            let tempFav = pokedex.favorites.filter(item => item.id !== id)
            setPokedex({...pokedex, favorites: tempFav})
        }
    }

    const FilterFavorits = () => {
        setPokedex({...pokedex, filterList: pokedex.favorites})
    }

    const resetSearch = () => {
        setPokedex({...pokedex, searchValue:''})
    }

    const filterType = (type) => {
        if(type !== 'Todos'){
            let tempValue = pokedex.pokeList.filter(item => {
                return (item.type.includes(type)) 
            })
            setPokedex({...pokedex, filterList: tempValue})
        }
        if(type === 'Todos'){
            setPokedex({...pokedex, filterList: pokedex.pokeList})
        }
    }

    // console.log(pokedex.pokeList)

    useEffect(()=>{
        getAllPokemons()
    },[pokedex.searchValue])

    useEffect(()=>{
        setPokedex({...pokedex, filterList: pokedex.pokeList})
    },[pokedex.pokeList])

    return (
        <div className="pokedex">
            <h1 className="title-pokedex">Pokedex</h1>
            <Search 
            onValue={setPokedex} 
            pokedex={pokedex} 
            onSearch={searchPokemon}
            onCleanSearch={resetSearch}
            />
            <div style={{marginTop:'1rem'}}>
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
                    <button onClick={FilterFavorits}>Favoritos <FontAwesomeIcon style={{color:'red'}} icon={faHeart}/></button>
                    <select value={pokedex.itensPerPage} onChange={(e) => setPokedex({...pokedex, itensPerPage: Number(e.target.value)})}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                <Types onFilterType={filterType}/>
            </div>
            <div className="box-card-list">
                {currentPageItens.map((item, index) => <Card item={item} id={item.id} favorites={pokedex.favorites.map(item => item.id)} onFavorite={favoritePokemon}/>)}
            </div>
        </div>
    );
}

export default ListPokemons;
