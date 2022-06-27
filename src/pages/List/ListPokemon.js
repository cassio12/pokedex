import React, { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../../components/Search/Search";
import "./ListPokemon.css"
import axios from 'axios'
import Card from "./components/Card/Card";
import Types from "../../components/Types/Types";
import OrderFilter from "../../components/Order/OrderFilter";
import Pagination from "../../components/Pagination/Pagination";
import DropDownPages from "../../components/DropDownPages/DropDownPages";

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
    order: 'ascending',
}

function ListPokemons() {
    const [pokedex, setPokedex] = useState(INITIAL_STATE);

    const pages = Math.ceil(pokedex.filterList.length / pokedex.itensPerPage);
    const startIndex = pokedex.currentPage * pokedex.itensPerPage;
    const endIndex = startIndex + pokedex.itensPerPage;
    const currentPageItens = pokedex.filterList.slice(startIndex, endIndex);

    const getAllPokemons = async() => {
        await axios.get(`${process.env.REACT_APP_LINK_API}/pokemons.json`)
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
        if(type !== 'All'){
            let tempValue = pokedex.pokeList.filter(item => {
                return (item.type.includes(type)) 
            })
            setPokedex({...pokedex, filterList: tempValue})
        }
        if(type === 'All'){
            setPokedex({...pokedex, filterList: pokedex.pokeList})
        }
    }

    const filterOrder = () => {
        let tempOrder = pokedex.pokeList.sort((a, b) => {
            if(pokedex.order === 'ascending') return a.national_number - b.national_number;
            if(pokedex.order === 'descending') return b.national_number - a.national_number;
        })
        setPokedex({...pokedex, filterList:tempOrder})
    }

    useEffect(() => {
        filterOrder()
    },[pokedex.order])

    useEffect(() => {
        getAllPokemons()
    },[pokedex.searchValue])

    console.log(process.env.REACT_APP_LINK_API)

    useEffect(() => {
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
            <Pagination pokedex={pokedex} onPokedex={setPokedex} pages={pages}/>
            <div>
                <div>
                    <button onClick={FilterFavorits}>Favorites <FontAwesomeIcon style={{color:'red'}} icon={faHeart}/></button>
                    <OrderFilter pokedex={pokedex} onPokedex={setPokedex}/>
                    <DropDownPages pokedex={pokedex} onPokedex={setPokedex}/>
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
