import React, { Component } from "react";
import { StyleSheet, StatusBar, KeyboardAvoidingView, Dimensions, View, Image, TouchableOpacity } from "react-native"
import { KeepAwake, LinearGradient } from "expo";
import PropTypes from "prop-types";

import Logo from "./Logo.js";
import Time from "./Time.js";
import Date from "./Date.js";
import Form from "./Form.js";
import Button from "./Button.js";
import SignupSection from "./SignupSection.js";

const { width, height } = Dimensions.get("window");

const LogInScreen = props => (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <LinearGradient colors={["#5e5c73","#d27a8a"]} style={styles.gradient}>
    <StatusBar barStyle={"light-content"} />
    <View style={styles.logoContainer}>
        <Logo />
    </View>        
    <View style={styles.timeContainer}>
        <Time />
        <Date />
    </View>
    <View style={styles.formContainer}>
        <View style={styles.inputContainer}>        
            <Form />
            <Button />
        </View>  
        <View>     
            <SignupSection />
        </View>          
    </View>        
    </LinearGradient>
    </KeyboardAvoidingView> 
);

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    gradient: {
        flex:1
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow:1,
        justifyContent: 'center',
        marginTop: 50
    },
    timeContainer: {
        alignItems: 'center',
        flexGrow:1,
    },
    formContainer: {
        padding: 50,
        marginBottom: 100
    },
    inputContainer: {
        justifyContent: "center",
        alignItems:"center"
    }
    
})

export default LogInScreen;
