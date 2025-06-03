import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, RefreshControl, StyleSheet } from 'react-native';

export default function ScrollExampleScreen() {
  const [items, setItems] = useState(Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`));
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(prev => [`New Item ${prev.length + 1}`, ...prev]);
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {items.map((item, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  scroll: { flex: 1 },
  box: {
    height: 80,
    backgroundColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 4
  },
  boxText: { fontSize: 16, color: '#333' }
});
