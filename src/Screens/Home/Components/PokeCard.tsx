import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const PokeCard = (props: any) => {
  const {pokemon, index} = props;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index}.png`;
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <View style={Styles.container}>
      <View style={Styles.infoContainer}>
        <Text style={Styles.pokemonName}>{name}</Text>
      </View>
      <Image source={{uri: imageUrl}} style={Styles.image} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 8 * 2 + 4,
    borderRadius: 8,
    flexDirection: 'row',
    height: 8 * 16,
    // Add smooth shadow to the card
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  infoContainer: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pokemonName: {
    fontSize: 8 * 3,
    fontWeight: 'bold',
    color: 'rgba(75, 85, 99, 1)',
  },
  image: {
    width: '110%',
    height: '130%',
    position: 'absolute',
    resizeMode: 'center',
    bottom: 0,
    left: 100,
  },
});

export default PokeCard;
