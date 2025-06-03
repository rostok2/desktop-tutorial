import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polygon } from 'react-native-maps';

export default function LocationScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Location permission denied');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Fetching location...</Text>
      </View>
    );
  }

  const { latitude, longitude } = location.coords;
  const polygonCoords = [
    { latitude: latitude + 0.005, longitude: longitude + 0.005 },
    { latitude: latitude + 0.005, longitude: longitude - 0.005 },
    { latitude: latitude - 0.005, longitude: longitude - 0.005 },
    { latitude: latitude - 0.005, longitude: longitude + 0.005 },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        showsUserLocation
        followsUserLocation
      >
        <Marker coordinate={{ latitude, longitude }} title="You are here" />
        <Marker 
          coordinate={{ latitude: latitude + 0.002, longitude: longitude + 0.002 }}
          title="Landmark"
          description="Sample marker"
        />
        <Polygon
          coordinates={polygonCoords}
          strokeColor="#FF0000"
          fillColor="rgba(255,0,0,0.3)"
          strokeWidth={2}
        />
      </MapView>
      <View style={styles.coords}>
        <Text>Latitude: {latitude.toFixed(6)}</Text>
        <Text>Longitude: {longitude.toFixed(6)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  map: { flex: 1 },
  coords: { padding: 16, backgroundColor: '#fff' }
});
