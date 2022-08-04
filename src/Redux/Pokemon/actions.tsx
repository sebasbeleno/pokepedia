export const LOAD_POKEMONS = 'LOAD_POKEMONS';
export const LOAD_POKEMONS_SUCCESS = 'LOAD_POKEMONS_SUCCESS';
export const LOAD_POKEMONS_FAILURE = 'LOAD_POKEMONS_FAILURE';
export const LOAD_POKEMON = 'LOAD_POKEMON';
export const LOAD_POKEMON_SUCCESS = 'LOAD_POKEMON_SUCCESS';
export const LOAD_POKEMON_FAILURE = 'LOAD_POKEMON_FAILURE';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';
export const LOAD_FAVORITES_SUCCESS = 'LOAD_FAVORITES_SUCCESS';
export const LOAD_FAVORITES_FAILURE = 'LOAD_FAVORITES_FAILURE';

export const LoadPokemons = () => ({
  type: LOAD_POKEMONS,
});

export const LoadPokemon = (pokemon: any) => ({
  type: LOAD_POKEMON,
  payload: pokemon,
});

export const AddToFavorites = (pokemon: any) => ({
  type: ADD_TO_FAVORITES,
  payload: pokemon,
});
