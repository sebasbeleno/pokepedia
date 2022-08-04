import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

interface StatsProps {
  stats: any[];
}

const Stats = (props: StatsProps) => {
  const RenderStat = ({item}: any) => {
    const {base_stat, stat} = item;

    return (
      <View style={styles.statContainer}>
        <View>
          <Text style={styles.statName}>{getStatName(stat.name)}</Text>
        </View>
        <Text style={styles.statValue}>{base_stat}</Text>
      </View>
    );
  };

  const getStatName = (stat: any) => {
    if (stat === 'hp') {
      return 'HP';
    }

    if (stat === 'attack') {
      return 'Attack';
    }

    if (stat === 'defense') {
      return 'Defense';
    }

    if (stat === 'special-attack') {
      return 'Sp. Attack';
    }

    if (stat === 'special-defense') {
      return 'Sp. Defense';
    }

    if (stat === 'speed') {
      return 'Speed';
    }

    return stat;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      <FlatList data={props.stats} renderItem={RenderStat} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8 * 2,
  },
  title: {
    fontSize: 8 * 3,
    fontWeight: 'bold',
    color: 'white',
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 8 * 3,
  },
  statName: {
    fontSize: 8 * 2,
    color: 'white',
  },
  statValue: {
    fontSize: 8 * 3,
    color: 'white',
  },
});
export default Stats;
