import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, TouchableHighlight, Pressable, StyleSheet } from 'react-native';

export default function TouchFeedbackScreen() {
  const [pressState, setPressState] = useState('Default Text');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => Alert.alert('TouchableOpacity', 'Button Pressed!')}
      >
        <Text style={styles.buttonText}>Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={[styles.button, { backgroundColor: '#28a745' }]}
        underlayColor="#19692c"
        onPress={() => Alert.alert('TouchableHighlight', 'Button Pressed!')}
      >
        <Text style={styles.buttonText}>Highlight</Text>
      </TouchableHighlight>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#ffc107' : '#fd7e14' }
        ]}
        onPressIn={() => setPressState('Pressed')}
        onPressOut={() => setPressState('Default Text')}
        onLongPress={() => setPressState('Long Pressed')}
      >
        <Text style={styles.buttonText}>{pressState}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  button: {
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  buttonText: { color: '#fff', fontSize: 16 }
});
