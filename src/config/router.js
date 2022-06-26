import React from "react";
import List from "../pages/List/ListPokemon"
import { BrowserRouter as Router, NavLink, Routes, Route, Link } from 'react-router-dom'
import "../App.css"

function Routers() {
    return (
        <Router>
        <div className="route">
            <header>
            <nav>
                <ul>
                <li>
                    <NavLink to='/'>Inicío</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Adicionar Pokemon</NavLink>
                </li>
                </ul>
            </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<List/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </main>
        </div>
        </Router>
    );
}

  const PageNotFound = () => {
    return(
      <>
        <h1>404</h1>
        <p>Page not found</p>
      </>
    )
  }
  

export default Routers;

