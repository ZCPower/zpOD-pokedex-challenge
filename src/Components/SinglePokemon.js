import React from 'react'
import '../Styles/SinglePokemon.css'

function SinglePokemon({ name, sprite, abilities, stats, types, species, handleAddToFavorites }) {

    const mappedAbilities = abilities.map((ability, key) => {
        return (
            <div key={key}>
                <span>{ability.ability.name}</span>
            </div>
        )
    })

    const mappedTypes = types.map((type, key) => {
        return (
            <div key={key}>
                <span>{type.type.name}</span>
            </div>
        )
    })

    const mappedStats = stats.map((stat, key) => {
        return (
            <div key={key}>
                <span><strong>{stat.stat.name}</strong>: {stat.base_stat}</span>
            </div>
        )
    })

    return (

        <div id='pokeContainer'>
            <div className='pokeHeader'>
                <h2>{name}</h2>
                <img src={sprite}></img>
            </div>
            <div className='pokeBody'>
                <div><h5>Abilities: </h5>{mappedAbilities}
                </div>
                <div><h5>Types: </h5>{mappedTypes}
                </div>
                <div><h5>Stats: </h5>{mappedStats}
                </div>

            </div>
            <button onClick={handleAddToFavorites} className='favButton'>Add to Favorites</button>

        </div>
    )
}

export default SinglePokemon