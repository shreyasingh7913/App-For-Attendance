import * as React from 'react';
import { View, Button, Text, TouchableOpacity,StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import AppHeader from '../components/AppHeader'
import HomeScreen from './HomeScreen'


export default class BuzzerScreen extends React.Component {
   goToStartScreen=(buzzercolor)=> {
      this.props.navigation.navigate('StartScreen',{color: buzzercolor})
    }


  displayAlert() 
{ alert('Attendence is Taken. All Changes are Saved'); 
    }



      render(){
    return(
      <View>
              <AppHeader/>
                                    <TouchableOpacity 
            style={[styles.button,{backgroundColor:"hotpink"}]} 
            onPress={()=>this.displayAlert("")}>
            <Text style={styles.buttonText}> Click To Know More </Text>
          </TouchableOpacity>

                                <TouchableOpacity 
            style={[styles.button,{backgroundColor:"hotpink"}]} 
            onPress={()=>this.goToStartScreen("")}>
            <Text style={styles.buttonText}> Click To Restart </Text>
          </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:200,
  },
  buttonText : {
    textAlign : 'center',
    color : 'black',

  },

})