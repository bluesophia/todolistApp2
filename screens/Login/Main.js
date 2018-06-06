import React, { Component } from "react";
//import { Router, Scene, Actions, ActionConst } from "react-native-router-flux";
import {
  StackNavigator,
} from 'react-navigation';
import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';

const App = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  SecondScreen: { screen: SecondScreen },
});

class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="secondScreen"
	          component={SecondScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}

export default Main;