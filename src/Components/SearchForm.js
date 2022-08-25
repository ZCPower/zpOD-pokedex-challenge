import React, { useEffect, useState } from 'react'
import { fetchPokemonByName } from '../FETCHREQUESTS/api'


export default function SearchForm({ getPokemon }) {
    const [search, setSearch] = useState('')


    const handleChange = async (e) => {
        const value = e.target.value.toLowerCase()
        setSearch(value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        getPokemon(search)
    }

    console.log()
    return (
        <div>
            {/* <h2>{search}</h2> */}
            <form className='pokeSearch' onSubmit={handleSubmit}>
                <input placeholder='Type Pokemon Name Here!' onChange={handleChange}></input>
                <button>Search!</button>
            </form>

        </div>
    )
}

