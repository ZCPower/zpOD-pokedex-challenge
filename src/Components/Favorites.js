import React from 'react'
import '../Styles/SinglePokemon.css'

function Favorites({ favorites, setFavorites }) {
    console.log('favorites', favorites)

    function handleRemove(key) {
        const temp = [...favorites]

        temp.splice(key, 1)

        setFavorites(temp)
    }

    const mappedFavorites = favorites.map((favorite, key) => {

        return (
            <div className='favorite'>
                <h3>Favorite #{key + 1}</h3>
                <h2>{favorite.name}</h2>
                <img src={favorite.sprites.front_default}></img>
                <button onClick={() => handleRemove(key)} className='removeFav'>Remove from Favorites</button>
            </div>
        )

    })



    return (
        <div className="favContainer"><h2>Favorites</h2>
            <div className='faves'>

                {mappedFavorites}</div></div>



    )
}

export default Favorites