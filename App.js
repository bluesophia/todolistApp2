// import React from "react";
// import { AppLoading, Asset, Font } from "expo";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { StyleSheet, Text, View } from "react-native";
// import { Provider } from "react-redux";
// import { persistGate } from "redux-persist/es/integration/react";
// import configureStore from "./redux/configureStore";
// import { PersistGate } from "redux-persist/integration/react";
// import AppContainer from "./components/AppContainer";

// const { persistor, store } = configureStore();

// class App extends React.Component {
//   state = {
//     isLoadingComplete: false
//   };
//   render() {
//     const { isLoadingComplete } = this.state;
//     if (!isLoadingComplete) {
//       return (
//         <AppLoading
//           startAsync={this._loadAssertsAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     }

//     return (
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <AppContainer />
//         </PersistGate>
//       </Provider>
//     );
//   }

//   _loadAssertsAsync = async () => {
//     return Promise.all([
//       Asset.loadAsync([require("./assets/images/logo_sm.png")]),
//       Font.loadAsync({
//         ...Ionicons.font,
//         ...MaterialIcons.font
//       })
//     ]);
//   };

//   _handleLoadingError = error => {
//     console.error(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({
//       isLoadingComplete: true
//     });
//   };
// }

// export default App;


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppContainer from './components/AppContainer/presenter';

export default class loginAnimation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

