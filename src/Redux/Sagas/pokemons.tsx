import {put, takeLatest, call} from 'redux-saga/effects';
import * as actions from '../Pokemon/actions';
import {navigate} from '../../Navigation';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function* loadPokemons(action: any) {
  try {
    const response = yield call(
      fetch,
      'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    );

    const data = yield response.json();
    yield put({type: actions.LOAD_POKEMONS_SUCCESS, payload: data.results});
  } catch (error) {
    yield put({type: actions.LOAD_POKEMONS_FAILURE, payload: error});
  }
}

function* loadPokemon(action: any) {
  try {
    const response = yield call(
      fetch,
      `https://pokeapi.co/api/v2/pokemon/${action.payload}`,
    );

    const data = yield response.json();
    yield put({type: actions.LOAD_POKEMON_SUCCESS, payload: data});
  } catch (error) {
    yield put({type: actions.LOAD_POKEMON_FAILURE, payload: error});
  }
}

function* AddToFavorites(action: any) {
  console.log('A');
  try {
    yield put({type: actions.ADD_TO_FAVORITES, payload: action.payload});
  } catch (error) {
    console.log(error);
  }
}

function* loadPokemonSuccess() {
  // DN
  try {
    yield call(() => {
      navigate('Details', {});
    });
  } catch (error) {
    console.log(error);
  }
}

function* pokemonsSaga() {
  yield takeLatest(actions.LOAD_POKEMONS, loadPokemons);
  yield takeLatest(actions.LOAD_POKEMON, loadPokemon);
  yield takeLatest(actions.LOAD_POKEMON_SUCCESS, loadPokemonSuccess);
  yield takeLatest(actions.ADD_TO_FAVORITES, AddToFavorites);
}

export default pokemonsSaga;
