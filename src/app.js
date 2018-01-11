import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component<{}> {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBu0Hi6qsOTmHU-_i2ITI5fl9oF9elVjLo',
      authDomain: 'react-native-auth-test-e9421.firebaseapp.com',
      databaseURL: 'https://react-native-auth-test-e9421.firebaseio.com',
      projectId: 'react-native-auth-test-e9421',
      storageBucket: 'react-native-auth-test-e9421.appspot.com',
      messagingSenderId: '796274887830'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
