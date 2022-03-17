import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {Entypo, FontAwesome, AntDesign} from "@expo/vector-icons";
import About from "./About";
import Home from "./Home";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
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
                                tabBarIcon: ({ color }) => (
                                    <AntDesign name="home" size={20} color={color} />
                                ),
                            }}
                />
                <Tab.Screen name="About" component={About}
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <Entypo name="info" size={20} color={color} />
                                ),
                            }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
