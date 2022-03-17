import React,{useState} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Button,
    FlatList
} from "react-native";
import { GStyles } from "../styles/GStyles";
import { color } from "../styles/Color";
import {Entypo, FontAwesome, AntDesign} from "@expo/vector-icons";
import About from "./About";
import First from "./First";

const Home = ({ navigation }) => {
    let [ items, setItem ] = useState([
        { id: '1', name: 'လူနာသယ်နည်း', price: 0.99, route: 'About' },
        { id: '2', name: 'အရိုးကျိုးခြင်း', price: 0.89, route: 'First' },
        { id: '3', name: 'About', price: 0.89, route: 'About' },
    ]);

    return (
        <View style={[GStyles.container, GStyles.p1]}>
            {/*Small Card*/}
            <View>
                <FlatList
                    data={items}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
                            <View style={[GStyles.card, GStyles.p1, GStyles.row, GStyles.aic]}>
                                <View style={[ GStyles.circle, GStyles.me2, {backgroundColor: color.cyan["200"]} ]}>
                                    <FontAwesome name="user-secret" size={24} color={color.cyan["500"]} />
                                </View>
                                <View>
                                    <Text style={[GStyles.h6, GStyles.text]}>{item.name}</Text>
                                    <Text style={[GStyles.textMute]}>အရိုးကျိုးဒဏ်ရာ</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={i => i.id}
                />
            </View>
        </View>
    )
}

export default Home;