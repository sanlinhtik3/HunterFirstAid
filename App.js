import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Entypo, FontAwesome, AntDesign, Feather, Ionicons} from "@expo/vector-icons";
import Home from "./pages/Home";
import About from "./pages/About";
import Content from "./pages/Content";
import First from "./pages/First";


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const BottomTab = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#f0edf6"
                inactiveColor="#334155"
                barStyle={{ backgroundColor: '#010409' }}
            >
                <Tab.Screen name="Home" component={Home}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color }) => (
                                    <AntDesign name="home" size={20} color={color} />
                                ),
                            }}
                />
                <Tab.Screen name="About" component={About}
                            options={{
                                tabBarLabel: 'About',
                                tabBarIcon: ({ color }) => (
                                    <Entypo name="info" size={20} color={color} />
                                ),
                            }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const App = () => {
  return (
      <NavigationContainer>
          <StatusBar style="auto" style="light"  />
          <Stack.Navigator initialRouteName='Home'
                           screenOptions={{
                               headerMode: 'screen',
                               headerTintColor: '#fff',
                               headerStyle: { backgroundColor: '#010409' },
                               headerTitleAlign: 'center',
                               headerTitleStyle: {
                                   fontWeight: 'bold',
                               },
                           }} >
              <Stack.Screen name="Home" component={Home}
                            options={({ navigation }) => ({
                                headerRight: () => (
                                    <Feather name="info" size={24} color="#fff" onPress={() => navigation.navigate('About')} />
                                ),
                            })}
              />
              <Stack.Screen name="About" component={About}
                            options={({ navigation }) => ({
                                headerLeft: () => (
                                    <Ionicons name="chevron-back-sharp" size={24} color="#fff" onPress={() => navigation.goBack()} />
                                ),
                            })}
              />
              <Stack.Screen name="Content" component={Content} />
              <Stack.Screen name="First" component={First}
                            // options={{
                            //     transitionSpec: {
                            //         open: config,
                            //         close: config,
                            //     },
                            // }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;