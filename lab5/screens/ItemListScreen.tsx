import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button, TouchableOpacity, Alert, RefreshControl } from 'react-native';

interface Item {
  id: string;
  name: string;
  price: number;
}

const initialItems: Item[] = Array.from({ length: 10 }, (_, i) => ({
  id: (i + 1).toString(),
  name: `Item ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 1
}));

export default function ItemListScreen() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<Item[]>(initialItems);
  const [ascending, setAscending] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Filter logic
  useEffect(() => {
    const lowerQ = query.toLowerCase();
    const f = items.filter(item => item.name.toLowerCase().includes(lowerQ));
    setFiltered(f);
  }, [query, items]);

  // Sort logic
  useEffect(() => {
    const sorted = [...filtered].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
    setFiltered(sorted);
  }, [ascending, filtered.length]);

  // Delete item
  const deleteItem = useCallback((id: string) => {
    Alert.alert('Delete', 'Remove this item?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: () => setItems(prev => prev.filter(item => item.id !== id)) }
    ]);
  }, []);

  // Pull to refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      // Simulate fetch - prepend new item
      const newItem: Item = {
        id: (items.length + 1).toString(),
        name: `New Item ${items.length + 1}`,
        price: Math.floor(Math.random() * 100) + 1
      };
      setItems([newItem, ...items]);
      setRefreshing(false);
    }, 1500);
  }, [items]);

  // Lazy loading
  const onEndReached = useCallback(() => {
    const nextItems = Array.from({ length: 5 }, (_, i) => ({
      id: (items.length + i + 1).toString(),
      name: `Lazy Item ${items.length + i + 1}`,
      price: Math.floor(Math.random() * 100) + 1
    }));
    setItems(prev => [...prev, ...nextItems]);
  }, [items]);

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.deleteBtn}>
        <Text style={{ color: 'white' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by name..."
        value={query}
        onChangeText={setQuery}
        style={styles.search}
      />
      <View style={styles.sortContainer}>
        <Button title={ascending ? 'Sort Desc' : 'Sort Asc'} onPress={() => setAscending(prev => !prev)} />
      </View>
      {filtered.length === 0 ? (
        <Text style={styles.noItems}>No items found</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  search: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginBottom: 8
  },
  sortContainer: { marginBottom: 8 },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 12, borderBottomWidth: 1, borderColor: '#eee'
  },
  name: { fontSize: 16 },
  price: { color: '#555' },
  deleteBtn: {
    backgroundColor: '#dc3545', padding: 8, borderRadius: 4
  },
  noItems: { textAlign: 'center', marginTop: 20, color: '#555' }
});
