import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return emailRegex.test(email);
};

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState(''); 
  const [subscribed, setSubscribed] = React.useState(false); 

  const handleSubscribe = () => {
    if (isValidEmail(email)) {
      setSubscribed(true);
      Alert.alert('Thanks for subscribing', 'Stay tuned!'); 
      setEmail(''); 
    } else {
      Alert.alert('Error', 'Please enter a valid email address.'); 
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/little-lemon-logo-grey.png')}
        style={styles.logo} 
        resizeMode="contain" 
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our {'\n'} latest delicious recipes!
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Type your email"
        placeholderTextColor="#888" 
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: subscribed ? "#888" : "#3E514B" }]} 
        onPress={handleSubscribe}
        disabled={subscribed}
      >
        <Text style={styles.buttonText}>{subscribed ? "Subscribed!" : "Subscribe"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#333',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
    fontFamily: 'sans-serif', 
    fontSize: 15, 
    color: 'black', 
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 15,
    fontWeight: 'bold', 
  },
});

export default SubscribeScreen;
