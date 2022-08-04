import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface HeaderProps {
  name: string;
  id: number;
  height: number;
  weight: number;
  type: string;
}
const Header = (props: HeaderProps) => {
  const {name, id, height, weight} = props;

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
  const _name = name.charAt(0).toUpperCase() + name.slice(1);

  const formatTypeName = (type: string) => {
    // return the typt with the first letter capitalized
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.pokemonName}>{_name}</Text>
      <Text style={styles.typeTitle}>{formatTypeName(props.type)}</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.statValue}>{height}</Text>
          <Text style={styles.statTitle}>Height</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statValue}>{weight}</Text>
          <Text style={styles.statTitle}>Weight</Text>
        </View>
      </View>
      <Image source={{uri: imageUrl}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 8 * 16,
    width: 8 * 16,
  },
  header: {
    width: '100%',
    height: 8 * 32,
    padding: 8 * 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  pokemonName: {
    fontSize: 8 * 5,
    fontWeight: 'bold',
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8 * 2,
  },
  statContainer: {
    flexDirection: 'column',
    marginHorizontal: 8,
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 8 * 1.7,
    color: 'white',
  },
  statValue: {
    fontSize: 8 * 3,
    color: 'white',
    fontWeight: 'bold',
  },
  typeTitle: {
    fontSize: 8 * 1.7,
    color: 'white',
  },
});

export default Header;
