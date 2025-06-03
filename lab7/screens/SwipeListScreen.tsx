import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SwipeableItem from '../components/SwipeableItem';

export default function SwipeListScreen() {
  const [items, setItems] = useState(Array.from({ length: 8 }, (_, i) => `Swipe Me ${i + 1}`));

  const handleSwipe = useCallback((index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  }, []);

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <SwipeableItem text={item} onSwipe={() => handleSwipe(index)} />
  );

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <Text style={styles.emptyText}>No items left</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  separator: { height: 8 },
  emptyText: { textAlign: 'center', marginTop: 20, fontSize: 16 }
});
