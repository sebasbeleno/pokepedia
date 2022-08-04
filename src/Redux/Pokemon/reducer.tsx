import * as actions from '../Pokemon/actions';
import produce from 'immer';

const initialState: {
  pokemons: any[];
  loading: boolean;
  error: string | null;
  pokemon: any;
  favorites: any[];
} = {
  pokemons: [],
  pokemon: {},
  loading: false,
  error: null,
  favorites: [],
};

const pokemons = (state = initialState, action: any) =>
  produce(state, draftState => {
    switch (action.type) {
      case actions.LOAD_POKEMONS:
        draftState.loading = true;
        break;

      case actions.LOAD_POKEMONS_SUCCESS:
        draftState.pokemons = action.payload;
        draftState.loading = false;
        draftState.error = null;
        break;

      case actions.LOAD_POKEMONS_FAILURE:
        draftState.error = action.payload;
        draftState.loading = false;
        break;

      case actions.LOAD_POKEMON:
        draftState.loading = true;
        break;

      case actions.LOAD_POKEMON_SUCCESS:
        draftState.pokemon = action.payload;
        draftState.loading = false;
        draftState.error = null;
        break;

      case actions.LOAD_POKEMON_FAILURE:
        draftState.error = action.payload;
        draftState.loading = false;
        break;

      case actions.ADD_TO_FAVORITES:
        draftState.favorites.push(action.payload);
        break;

      default:
        break;
    }
  });

export default pokemons;
