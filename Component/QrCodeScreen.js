import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, Linking, StyleSheet, View, Animated, Easing } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
const [flashMode, setFlashMode] = useState('');

export default function QrCodeScreen() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  const toggleFlash = () => {
    setFlashMode(
      flashMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.torch
        : Camera.Constants.FlashMode.off
    );
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate('Details', { datas: type, data })
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      { iterations: -1 }
    ).start();
  }, [])




  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <Camera
      style={styles.cameraContainer}
      type={Camera.Constants.Type.back}
      onBarCodeScanned={scanned ? undefined : (data) => {
        handleBarCodeScanned(data);
      }}

      flashMode={flashMode}
    >
      <View style={styles.overlay}>
        <View style={styles.border} />
        <View style={styles.transparentView}>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={() => setScanned(false)}
          >
            <Text style={styles.scanButtonText}>
              {scanned ? 'Tap to Scan Again' : 'Scanning...'}
            </Text>
            {scanned && (
              <Animated.View
                style={{
                  transform: [
                    {
                      scale: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.5],
                      }),
                    },
                  ],
                }}
              >
              </Animated.View>
            )}
          </TouchableOpacity>
          <Animated.View style={{
            borderColor: 'white', paddingLeft: 100, paddingRight: 100, bottom: 50,
            transform: [
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.5],
                }),
              },
            ],
          }}  >
            <Icon size={150} name='screen-full' color={'#fff'} />

          </Animated.View>
          <TouchableOpacity
            style={styles.flashButton}
            onPress={() => toggleFlash()}
          >
            <Icon size={24} name={flashMode === Camera.Constants.FlashMode.off ? 'flash-off' : 'flash'} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',

  },


  scanButton: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonText: {
    fontSize: 18,
    color: 'white',
    top: 350
  },
});
