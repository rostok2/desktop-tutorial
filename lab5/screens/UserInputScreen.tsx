import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, Switch, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function UserInputScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [airplane, setAirplane] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = () => {
    Alert.alert('Submitted', `Username: ${username}
Password: ${password}`);
  };

  const toggleAirplane = (value: boolean) => {
    setAirplane(value);
    if (value) {
      setWifi(false);
    }
  };

  const toggleWifi = (value: boolean) => {
    setWifi(value);
  };

  const onChangeDate = (_: any, selected?: Date) => {
    const current = selected || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(current);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />
      <Button title="Submit" onPress={onSubmit} />

      <View style={styles.switchRow}>
        <Text>Airplane Mode</Text>
        <Switch value={airplane} onValueChange={toggleAirplane} />
      </View>
      <View style={styles.switchRow}>
        <Text>Wi-Fi</Text>
        <Switch value={wifi} onValueChange={toggleWifi} disabled={airplane} />
      </View>

      <Text style={[styles.label, { marginTop: 16 }]}>Select Size:</Text>
      <Picker
        selectedValue={selectedSize}
        onValueChange={(itemValue) => setSelectedSize(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="S" value="S" />
        <Picker.Item label="M" value="M" />
        <Picker.Item label="L" value="L" />
        <Picker.Item label="XL" value="XL" />
      </Picker>
      <Text>Selected Size: {selectedSize}</Text>

      <View style={{ marginTop: 16 }}>
        <Button title="Choose Date" onPress={() => setShowDatePicker(true)} />
        <Text>Selected Date: {date.toLocaleDateString()}</Text>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 16, marginTop: 12 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginTop: 4
  },
  switchRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16
  },
  picker: {
    height: 50, width: '100%'
  }
});
