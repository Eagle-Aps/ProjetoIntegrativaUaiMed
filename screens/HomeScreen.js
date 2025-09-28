import React from 'react';
import { View, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
const screenWidth = Dimensions.get('window').width;


export default function HomeScreen() {

    const logoWidth = screenWidth * 0.8;
    const logoHeight = (logoWidth * 9) / 16;
  
    return (
      <View style={styles.container}>
      <View style={styles.topBar} />
  
        <View style={styles.content}>
          <Image
            source={require('../assets/LogoUaiMed.png')}
            style={[styles.logo, { width: logoWidth, height: logoHeight }]}
            resizeMode="contain"
          />
        </View>
  
        <View style={styles.bottomBar} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topBar: {
      height: 60,
      backgroundColor: '#478950',
    },
    bottomBar: {
      height: 60,
      backgroundColor: '#478950',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      marginBottom: 30,
    },
    input: {
      width: '100%',
      padding: 12,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 15,
      borderRadius: 8,
      backgroundColor: '#fff',
    },
    button: {
      backgroundColor: '#478950',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 25,
      textAlign: 'center',
    },
  });
  