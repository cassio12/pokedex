import React from "react";
import List from "../pages/List/ListPokemon"
import { BrowserRouter as Router, NavLink, Routes, Route, Link } from 'react-router-dom'

function Routers() {
    return (
        <Router>
        <div className="App">
            <header>
            <nav>
                <ul>
                <li>
                    <NavLink to='/'>Inicío</NavLink>
                </li>
                <li>
                    <NavLink to='/adicionar'>Adicionar Usuários</NavLink>
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

