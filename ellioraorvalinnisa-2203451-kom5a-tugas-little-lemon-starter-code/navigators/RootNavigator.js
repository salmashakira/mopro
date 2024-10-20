import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from 'react-native'; 
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: 'center', 
      }}
    >
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ title: 'Welcome' }} 
      />
      <Stack.Screen 
        name="Subscribe" 
        component={SubscribeScreen} 
        options={({ navigation }) => ({
          title: 'Subscribe', 
          headerLeft: () => ( 
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: '#007AFF', paddingLeft: 10 }}>{'< Welcome'}</Text>
            </TouchableOpacity>
          ),
        })} 
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
