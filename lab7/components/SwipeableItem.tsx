import React, { useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

interface SwipeableItemProps {
  text: string;
  onSwipe: () => void;
}

export default function SwipeableItem({ text, onSwipe }: SwipeableItemProps) {
  const scrollRef = useRef<ScrollView>(null);
  const itemWidth = 300; // width of the visible item
  const threshold = itemWidth / 2;

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    if (offsetX > threshold) {
      onSwipe();
    } else {
      // snap back
      scrollRef.current?.scrollTo({ x: 0, animated: true });
    }
  };

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      onScrollEndDrag={handleScrollEnd}
      scrollEventThrottle={16}
    >
      <View style={[styles.item, { width: itemWidth }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={[styles.blank, { width: itemWidth }]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 80,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderColor: '#dee2e6'
  },
  text: { fontSize: 16, color: '#212529' },
  blank: {
    height: 80,
    backgroundColor: 'red'
  }
});
