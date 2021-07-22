import * as React from 'react';
import { View } from 'react-native';
import StartScreen from './Screen/StartScreen'
import HomeScreen from './Screen/HomeScreen'
import BuzzerScreen from './Screen/BuzzerScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
              </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  StartScreen:StartScreen,
  HomeScreen:HomeScreen,
  BuzzerScreen:BuzzerScreen
  

})

const AppContainer = createAppContainer(AppNavigator)

