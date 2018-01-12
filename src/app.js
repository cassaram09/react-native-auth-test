import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component<{}> {

  state = {
    loggedIn: null,
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBu0Hi6qsOTmHU-_i2ITI5fl9oF9elVjLo',
      authDomain: 'react-native-auth-test-e9421.firebaseapp.com',
      databaseURL: 'https://react-native-auth-test-e9421.firebaseio.com',
      projectId: 'react-native-auth-test-e9421',
      storageBucket: 'react-native-auth-test-e9421.appspot.com',
      messagingSenderId: '796274887830'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.loadingStyle} >
            <Spinner size='large' />
          </View>
        );
    } 
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#eee' }}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
const styles = {
  loadingStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  }
};
export default App;
