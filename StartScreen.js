import * as React from 'react';
import { Text, View, HomeColor, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import AppHeader from '../components/AppHeader'

export default class StartScreen extends React.Component {
    goToHomeScreen=(buzzercolor)=> {
      this.props.navigation.navigate('HomeScreen',{color: buzzercolor})
    }

  render() {
    return (
     <center>
      <AppHeader/>
      
      <TouchableOpacity
        style={styles.button}
        onPress={this.goToHomeScreen}>
        <Text
          style={styles.buttonText}>
          Press To Start Marking Attendence
        </Text>
      </TouchableOpacity>
      </center>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});
