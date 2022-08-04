import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Pikaimage = {
  uri: 'https://es.digitaltrends.com/wp-content/uploads/2021/07/detective-pikachu.jpg?p=1',
};

const Header = () => {
  return (
    <ImageBackground source={Pikaimage} style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.title}>Welcome to Pokepedia</Text>
      </View>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 8 * 16,
    overflow: 'hidden',
    borderBottomEndRadius: 8 * 2,
    borderBottomStartRadius: 8 * 2,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
