import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ColumnLayoutScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'tomato' }]} />
      <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
      <View style={[styles.box, { backgroundColor: 'limegreen' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },
});
