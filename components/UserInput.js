import React, {Component} from "react";
import PropTypes from "prop-types";
import Dimensions from "Dimensions";
import {StyleSheet, View, TextInput, Image} from "react-native";

const { width, height } = Dimensions.get("window");

class UserInput extends Component {
    render(){
        return(
             <View>
                <Image source={this.props.source} style={styles.inlineImg} />,
                <TextInput
                style={styles.input}
                value={this.props.value || ''}
                placeholder={this.props.placeholder}
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                secureTextEntry={this.props.secureTextEntry}
                autoCorrect={this.props.autoCorrect}
                autoCapitalize={this.props.autoCapitalize}
                returnKeyType={this.props.returnKeyType}
                >
                </TextInput>
             </View>
        )
    }
}

UserInput.propTypes = {
    //value:PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
    //value: PropTypes.string
}

const styles= StyleSheet.create({
    inlineImg: {
        position: 'absolute',
        resizeMode: "stretch",
        zIndex: 99,
        width: 20,
        height: 20,
        left: 10,
        top: 9
    },
    input: {
        height: 40,
        width: 240,
        marginBottom: 10,
        paddingLeft: 50,
        color: "white",
        paddingHorizontal: 13,
        borderBottomWidth: 1,
        borderBottomColor:"#fff"
    }
})

export default UserInput;