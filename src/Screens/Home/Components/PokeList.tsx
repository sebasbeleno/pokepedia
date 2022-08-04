import React from 'react';
import {View, FlatList, TouchableHighlight} from 'react-native';
import PokeCard from './PokeCard';
import {LoadPokemon} from '../../../Redux/Pokemon/actions';
import {store} from '../../../Redux/store';

interface PokeListProps {
  pokemons: any[];
  navigation: any;
}

const PokeList = (props: PokeListProps) => {
  const _LoadPokemon = (id: any) => {
    // Should dispach an action to load the pokemons and navigate to the next screen
    store.dispatch(LoadPokemon(id));
  };

  const {pokemons} = props;
  return (
    <View>
      <FlatList
        data={pokemons}
        renderItem={({item}) => {
          // extract the pokemon id from the url
          const id = item.url.split('/')[6];
          return (
            <TouchableHighlight
              onPress={() => {
                _LoadPokemon(id);
              }}
              underlayColor="#fff">
              <PokeCard pokemon={item} index={id} />
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};

export default PokeList;
