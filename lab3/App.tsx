import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RowLayoutScreen from './components/RowLayoutScreen';
import ColumnLayoutScreen from './components/ColumnLayoutScreen';
import GridLayoutScreen from './components/GridLayoutScreen';
import { StatusBar } from 'expo-status-bar';

type LayoutType = 'row' | 'column' | 'grid';

export default function App() {
  const [layout, setLayout] = useState<LayoutType>('row');

  const toggleLayout = useCallback(() => {
    setLayout((prev) => {
      if (prev === 'row') return 'column';
      if (prev === 'column') return 'grid';
      return 'row';
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleLayout} style={styles.button}>
          <Text style={styles.buttonText}>Toggle Layout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.screenContainer}>
        {layout === 'row' && <RowLayoutScreen />}
        {layout === 'column' && <ColumnLayoutScreen />}
        {layout === 'grid' && <GridLayoutScreen />}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  screenContainer: {
    flex: 1,
  },
});
