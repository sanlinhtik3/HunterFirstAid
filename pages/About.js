import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import {GStyles} from "../styles/GStyles";

const About = () => (
    <SafeAreaView>
        <ScrollView>
            <View style={[GStyles.container, GStyles.p1]}>
                <Text style={[GStyles.h4]}>About</Text>
                <View style={[GStyles.line]}/>
                <Text style={[GStyles.para]}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed voluptas? Accusamus, adipisci et itaque iure natus nobis optio soluta! Eligendi explicabo perferendis provident veritatis? Harum in nesciunt nostrum sint?
                </Text>
                <View style={{marginVertical: 10}} />
                <Text style={[GStyles.h4]}>About Page</Text>
                <View style={[GStyles.line]}/>
                <Text style={[GStyles.para]}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed voluptas? Accusamus, adipisci et itaque iure natus nobis optio soluta! Eligendi explicabo perferendis provident veritatis? Harum in nesciunt nostrum sint?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed voluptas? Accusamus, adipisci et itaque iure natus nobis optio soluta! Eligendi explicabo perferendis provident veritatis? Harum in nesciunt nostrum sint?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed voluptas? Accusamus, adipisci et itaque iure natus nobis optio soluta! Eligendi explicabo perferendis provident veritatis? Harum in nesciunt nostrum sint?
                </Text>
                <View style={{marginVertical: 10}} />
                <Text style={[GStyles.h4]}>Contact Me</Text>
                <View style={[GStyles.line]}/>
                <Text style={[GStyles.para]}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed voluptas? Accusamus, adipisci et itaque iure natus nobis optio soluta! Eligendi explicabo perferendis provident veritatis? Harum in nesciunt nostrum sint?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed voluptas? Accusamus, adipisci et itaque iure natus nobis optio soluta! Eligendi explicabo perferendis provident veritatis? Harum in nesciunt nostrum sint?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed voluptas? Accusamus, adipisci et itaque iure natus nobis optio soluta! Eligendi explicabo perferendis provident veritatis? Harum in nesciunt nostrum sint?
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
)

export default About;