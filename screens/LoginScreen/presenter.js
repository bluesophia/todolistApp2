import React, { Component } from "react";
import { StyleSheet, 
        StatusBar, 
        KeyboardAvoidingView, 
        Dimensions, 
        View, 
        Image, 
        TouchableOpacity,
        ActivityIndicator
    } from "react-native"
import { KeepAwake, LinearGradient } from "expo";
import PropTypes from "prop-types";

import Logo from "../../components/Logo";
import Time from "../../components/Time";
import Date from "../../components/Date";
import LoginForm from "../../components/LoginForm";
import Button from "../../components/Button";
import SignupSection from "../../components/SignupSection";

const { width, height } = Dimensions.get("window");


class LogInScreen extends Component {
    render(){
        console.log(this.props)
        const { isSubmitting,
                submit } = this.props;
                      
        return(
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
                        <LoginForm />
                        <TouchableOpacity 
                            onPressOut={()=> alert ("It works")} 
                            style={styles.button}
                            >
                            {isSubmitting ? (
                                <ActivityIndicator size="large" color="white" />
                            ) : ( 
                                <Button />
                            )}
                        </TouchableOpacity>
                    </View>  
                    <View>     
                        <SignupSection />
                    </View>          
                </View>        
                </LinearGradient>
            </KeyboardAvoidingView> 
        );
    }
    
}

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
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      loginbtn: {
        width: 35,
        height:30,
        marginTop:20
      }
    
})

export default LogInScreen;
