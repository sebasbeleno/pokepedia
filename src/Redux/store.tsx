import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootReducer from './rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import pokemonsSaga from './Sagas/pokemons';
import {all} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

function* saga() {
  yield all([pokemonsSaga()]);
}
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false, serializableCheck: false}).concat(
      sagaMiddleware,
    ),
});

sagaMiddleware.run(saga);

export const persistor = persistStore(store);
