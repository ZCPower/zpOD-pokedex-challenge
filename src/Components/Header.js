import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>PokeDex</h1>
            <nav><ul><li><Link to='/favorites'>Favorites</Link></li>
                <li><Link to='/'>Search Pokemon</Link></li></ul></nav>


        </header>

    )
}

export default Header