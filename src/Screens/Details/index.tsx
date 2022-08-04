/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {store} from '../../Redux/store';
import {Header, Stats} from './Components';
import {AddToFavorites} from '../../Redux/Pokemon/actions';

const Details = () => {
  const state = store.getState();
  const pokemon = state.pokemon;

  console.log(state.favorites);

  const {name, id, height, weight, stats, types} = pokemon;

  const _type = types[0].type.name;

  const getBackgroundColor = (_types: any) => {
    if (_types.length > 0) {
      return getColor(types[0].type.name);
    }
  };

  const getColor = (type: string) => {
    if (type === 'normal') {
      return '#A8A77A';
    }

    if (type === 'fighting') {
      return '#C22E28';
    }

    if (type === 'flying') {
      return '#A98FF3';
    }

    if (type === 'poison') {
      return '#A33EA1';
    }

    if (type === 'ground') {
      return '#E2BF65';
    }

    if (type === 'rock') {
      return '#B6A136';
    }

    if (type === 'bug') {
      return '#A6B91A';
    }

    if (type === 'ghost') {
      return '#735F6D';
    }

    if (type === 'steel') {
      return '#B7B7CE';
    }

    if (type === 'fire') {
      return '#EE8130';
    }

    if (type === 'water') {
      return '#6390F0';
    }

    if (type === 'grass') {
      return '#7AC74C';
    }

    if (type === 'electric') {
      return '#F7D02C';
    }

    if (type === 'psychic') {
      return '#F95587';
    }

    if (type === 'ice') {
      return '#96D9D6';
    }

    if (type === 'dragon') {
      return '#6F35FC';
    }

    if (type === 'dark') {
      return '#705746';
    }

    if (type === 'fairy') {
      return '#D685AD';
    }

    return '#A8A77A';
  };

  const RenderAddToFavoriteButton = () => {
    return (
      <Svg
        width={24}
        height={24}
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        fill="none">
        <Path
          d="M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z"
          stroke="#fff"
          strokeLinejoin="round"
        />
      </Svg>
    );
  };

  const onPressAddToFavorites = () => {
    store.dispatch(AddToFavorites(pokemon));
  };

  return (
    <View style={{backgroundColor: getBackgroundColor(types), flex: 1}}>
      <TouchableHighlight
        onPress={() => onPressAddToFavorites()}
        style={{position: 'absolute', bottom: 50, right: 20}}>
        {RenderAddToFavoriteButton()}
      </TouchableHighlight>
      <Header
        name={name}
        height={height}
        weight={weight}
        id={id}
        type={_type}
      />
      <View>
        <Stats stats={stats} />
      </View>
    </View>
  );
};

export default Details;
