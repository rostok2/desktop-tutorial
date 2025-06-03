import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function GridLayoutScreen() {
  const boxes = Array.from({ length: 8 }).map((_, i) => (
    <View key={i} style={[styles.box, { backgroundColor: getColor(i) }]} />
  ));

  return <View style={styles.container}>{boxes}</View>;
}

function getColor(index: number) {
  const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple', 'pink'];
  return colors[index % colors.length];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  box: {
    width: 50,
    height: 50,
    margin: 5,
  },
});
