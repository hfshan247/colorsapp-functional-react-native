import * as React from 'react';
import { Text, View, StyleSheet, Alert, Dimensions, StatusBar, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import UsernameInput from '../components/UsernameInput'
import PasswordInput from '../components/PasswordInput'
import ReusableButton from '../components/ReusableButton'
import { StackActions, NavigationActions } from 'react-navigation';


export default class SignupScreen extends React.Component {
  handleClickButtonSignup = () => {
        //this.props.navigation.navigate('Home')
    const resetAction = StackActions.reset({
      index: 0, // <-- currect active route from actions array
      actions: [NavigationActions.navigate({ routeName: 'Main' })],
    });

    this.props.navigation.dispatch(resetAction);
  };

  handleClickButtonBack = () => {
            //this.props.navigation.navigate('Home')
    const resetAction = StackActions.reset({
      index: 0, // <-- currect active route from actions array
      actions: [NavigationActions.navigate({ routeName: 'Main' })],
    });

    this.props.navigation.dispatch(resetAction);
  };

  static navigationOptions = {
    title: 'Signup',
    headerStyle: {
      backgroundColor: '#34a7a7',
    },
    headerTintColor: '#fff',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ee1d23" barStyle="light-content" />
        <UsernameInput />
        <PasswordInput />
        <PasswordInput />
        <ReusableButton title='Signup' backgroundColor='#33a7a7' handleClick={this.handleClickButtonSignup}/>
        <ReusableButton title='Back' backgroundColor='#0b9689' handleClick={this.handleClickButtonBack}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#ffffff',
  },
});
