import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/little-lemon-logo.png')} 
          style={styles.logo}
          resizeMode="contain" 
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Little Lemon, your local{'\n'}Mediterranean Bistro!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Subscribe')} 
        >
          <Text style={styles.buttonText}>Newsletter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 1, 
    justifyContent: 'center', 
    marginTop: 40, 
  },
  logo: {
    width: 200,  
    height: 200, 
  },
  textContainer: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    marginBottom: 40, 
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 20, 
    color: '#333',
  },
  button: {
    backgroundColor: '#3E514B', 
    paddingVertical:9, 
    paddingHorizontal: 30, 
    borderRadius: 10, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 19, 
    fontWeight: 'bold', 
    textAlign: 'center',
  },
});

export default WelcomeScreen;
