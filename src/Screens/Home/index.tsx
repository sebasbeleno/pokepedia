import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, PokeList} from './Components';
import {store} from '../../Redux/store';
import {LoadPokemons} from '../../Redux/Pokemon/actions';

const Home = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    store.dispatch(LoadPokemons());
  }, []);

  return (
    <View style={Styles.container}>
      <Header />
      <PokeList pokemons={store.getState().pokemons} navigation={navigation} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
export default Home;
