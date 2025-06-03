import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, TouchableOpacity, ActivityIndicator, Animated, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const showConfirm = () => setConfirmVisible(true);
  const showError = () => setErrorVisible(true);
  const showLoading = () => {
    setLoadingVisible(true);
    setTimeout(() => setLoadingVisible(false), 3000);
  };
  const showToast = () => {
    setToastVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setToastVisible(false));
      }, 2000);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Confirm Action" onPress={showConfirm} />
      <View style={styles.spacer} />
      <Button title="Show Error" color="#d9534f" onPress={showError} />
      <View style={styles.spacer} />
      <Button title="Toast Message" onPress={showToast} />
      <View style={styles.spacer} />
      <Button title="Fetch Data..." onPress={showLoading} />

      {/* Confirm Modal */}
      <Modal transparent visible={confirmVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirm Action</Text>
            <Text style={styles.modalText}>Are you sure you want to proceed?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={[styles.button, styles.buttonYes]} onPress={() => setConfirmVisible(false)}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonNo]} onPress={() => setConfirmVisible(false)}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Error Modal */}
      <Modal transparent visible={errorVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContainer, styles.errorContainer]}>
            <Text style={styles.modalTitle}>Error</Text>
            <Text style={styles.modalText}>Something went wrong!</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={[styles.button, styles.buttonFix]} onPress={() => setErrorVisible(false)}>
                <Text style={styles.buttonText}>Fix it</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonIgnore]} onPress={() => setErrorVisible(false)}>
                <Text style={styles.buttonText}>Ignore it</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Loading Modal */}
      <Modal transparent visible={loadingVisible} animationType="none">
        <View style={styles.modalOverlay}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007bff" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </View>
      </Modal>

      {/* Toast Message */}
      {toastVisible && (
        <Animated.View style={[styles.toastContainer, { opacity: fadeAnim }]}>
          <Text style={styles.toastText}>Something happened!</Text>
        </Animated.View>
      )}
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  spacer: { height: 16 },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  errorContainer: {
    backgroundColor: '#f8d7da',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#212529',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#212529',
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonYes: { backgroundColor: '#28a745' },
  buttonNo: { backgroundColor: '#6c757d' },
  buttonFix: { backgroundColor: '#d9534f' },
  buttonIgnore: { backgroundColor: '#6c757d' },
  buttonText: { color: '#fff', fontSize: 16 },
  loadingContainer: {
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#212529',
  },
  toastContainer: {
    position: 'absolute',
    bottom: 40,
    left: width * 0.1,
    width: width * 0.8,
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
  },
});
