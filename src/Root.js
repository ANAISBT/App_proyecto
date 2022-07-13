import { StyleSheet, View } from "react-native";

import AccountScreen from "./screens/Account";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); //iniciar el Stack

const Root = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
      >
        {/* dentro del stack */}
  
        <Stack.Screen name="Login" 
        component={LoginScreen} 
        options={{headerShown:false}}
        />
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{headerShown:false}}
        />

        <Stack.Screen name="Account" 
        component={AccountScreen} 
        options={{headerShown:false}}
        />
      </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default Root;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });