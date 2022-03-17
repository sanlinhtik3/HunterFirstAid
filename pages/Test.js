import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Button
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { GStyles } from "../styles/GStyles";
import { color } from "../styles/Color";
import {Entypo, FontAwesome, AntDesign} from "@expo/vector-icons";
import About from "./About";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[GStyles.container, GStyles.p1]}>
                    <View style={[GStyles.card]}>
                        <View style={[GStyles.cardBody]}>
                            <TouchableOpacity>
                                <Image style={GStyles.cardImage} source={require('../assets/img/poe.jpg')} />
                            </TouchableOpacity>
                            <Text style={[GStyles.cardTitle]}>Card Title</Text>
                            <Text style={[GStyles.cardText]}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum eius explicabo, molestias pariatur sapiente. Aliquam doloribus dolorum in incidunt iusto, laboriosam, maiores nesciunt provident quod repellat veniam vitae. Magnam.
                            </Text>
                        </View>
                    </View>
                    <View style={[GStyles.card]}>
                        <View style={[GStyles.cardBody]}>
                            <View style={[GStyles.row]}>
                                <View style={{flex: 1}}>
                                    <Image style={GStyles.cardImageRight} source={require('../assets/img/poe.jpg')} />
                                </View>
                                <View style={{flex: 2}}>
                                    <Text style={GStyles.cardTitle}>Head</Text>
                                    <Text>
                                        Asperiores corporis cum debitis dignissimos, dolorum eum nihil
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Button
                        title="Go to Details... again"
                        onPress={() => navigation.navigate('About')}
                    />

                    {/*List Group*/}
                    <View style={[GStyles.listGroup, GStyles.mb1]}>
                        <Text style={[GStyles.listGroupItem]}>Apple</Text>
                        <Text style={[GStyles.listGroupItem]}>Orange</Text>
                        <Text style={[GStyles.listGroupItem]}>Mango</Text>
                        <View style={[GStyles.listGroupItem, GStyles.row, GStyles.aic]}>
                            <View style={[ GStyles.circle, GStyles.me2, {backgroundColor: color.cyan["200"]} ]}>
                                <FontAwesome name="user-secret" size={24} color={color.cyan["500"]} />
                            </View>
                            <View>
                                <Text style={[GStyles.h6]}>Personal Information</Text>
                                <Text>Personal Information</Text>
                            </View>
                        </View>
                        <View style={[GStyles.listGroupItem, GStyles.row, GStyles.aic, GStyles.jcsb]}>
                            <View style={[GStyles.row, GStyles.aic]}>
                                <View style={[ GStyles.circle, GStyles.me2, {backgroundColor: color.cyan["200"]} ]}>
                                    <FontAwesome name="user-secret" size={24} color={color.cyan["500"]} />
                                </View>
                                <View>
                                    <Text style={[GStyles.h6]}>Personal Information</Text>
                                    <Text>Personal Information</Text>
                                </View>
                            </View>
                            <View>
                                <Entypo name="chevron-small-right" size={24} color={color.cyan["500"]} />
                            </View>
                        </View>
                    </View>

                    {/*Small Card*/}
                    <View>
                        <View style={[GStyles.card, GStyles.p1, GStyles.row, GStyles.aic]}>
                            <View style={[ GStyles.circle, GStyles.me2, {backgroundColor: color.cyan["200"]} ]}>
                                <FontAwesome name="user-secret" size={24} color={color.cyan["500"]} />
                            </View>
                            <View>
                                <Text style={[GStyles.h6]}>Personal Information</Text>
                                <Text>Personal Information</Text>
                            </View>
                        </View>
                        <View style={[GStyles.card, GStyles.p1, GStyles.row, GStyles.aic]}>
                            <View style={[ GStyles.circle, GStyles.me2, { backgroundColor: color.cyan["200"]} ]}>
                                <FontAwesome name="user-secret" size={24} color={color.cyan["500"]} />
                            </View>
                            <View>
                                <Text style={[GStyles.h6]}>Personal Information</Text>
                                <Text>Personal Information</Text>
                            </View>
                        </View>
                        <View style={[GStyles.card, GStyles.p1, GStyles.row, GStyles.aic,{ backgroundColor: color.blue["50"] }]}>
                            <View style={[ GStyles.circle, GStyles.me2, {backgroundColor: color.cyan["200"]} ]}>
                                <FontAwesome name="user-secret" size={24} color={color.cyan["500"]} />
                            </View>
                            <View>
                                <Text style={[GStyles.h6]}>Personal Information</Text>
                                <Text>Personal Information</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const Home = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="HomeScreen"
                activeColor="#f0edf6"
                inactiveColor="#334155"
                barStyle={{ backgroundColor: '#010409' }}
            >
                <Tab.Screen name="HomeScreen" component={HomeScreen}
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


export default Home;