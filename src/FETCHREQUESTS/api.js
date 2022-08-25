export const baseURL = 'https://pokeapi.co/api/v2/pokemon'
// const query = {
//     pokemon: 'pokemon'
// }


export async function fetchPokemonByName(name) {
    const url = `${baseURL}/${name}`
    console.log(url)
    try {
        const response = await fetch(url)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        throw error
    }
}