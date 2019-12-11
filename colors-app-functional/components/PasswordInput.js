import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Keyboard, Dimensions } from 'react-native';

export default class PasswordInput extends React.Component {
  render() {
    return (
        <View style={styles.backgroundWrapper}>
          <View style={styles.icon}>
            <Image
              source={require('../assets/icon-lock.png')}
              style={{ width: 30, height: 30 }}
            />
          </View>

          <View
            style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Enter password"
              keyboardType="email-address"
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
              onChangeText={text => this.setState({ entered_username: text })}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    backgroundWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 16,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  
  icon: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#ecf0f1',
    marginLeft: 8,
  },

  inputWrapper: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 140,
    height: 35,
    justifyContent: 'center',
    backgroundColor:'#ecf0f1'
  },
  
  input: {
    fontWeight: 'bold',
    height: 35,
  }

  
});
