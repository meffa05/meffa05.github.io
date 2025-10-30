;(async () => {

//get random pokemon function
    const getRandomPokemon = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
        const result = await fetch(url)
        const Pokemon = await result.json()
        const {name, front_default } = Pokemon.sprites
        return {name, front_default}
    }
    console.log(await getRandomPokemon())

    const renderPokemon = async ({name, front_default}) => {
        const pokemonDiv = document.querySelector('#pokemon-ctr')
        pokemonDiv.innerHTML=''
        const pokemonImg= document.createElement('img')
        pokemonImg.src = front_default
        pokemonImg.alt = name
        pokemonDiv.append(pokemonImg)


    }
    renderPokemon(await getRandomPokemon())



})();
