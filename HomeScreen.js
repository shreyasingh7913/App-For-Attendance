import * as React from 'react';
import { View, Button, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {
  goToBuzzerScreen=(buzzercolor)=> {
      this.props.navigation.navigate('BuzzerScreen',{color:buzzercolor})
    }
displayAlert() 
{ alert('This Student is Present'); 
    }
  render(){
    return(
      <View>

        <AppHeader/>

         <Button title="Aditi Kumawat" color="hotpink" onPress={this.displayAlert}/>
        <Button title="Aditya Jain" color="" onPress={this.displayAlert}/>
         <Button title="Aditya Singh" color="hotpink" onPress={this.displayAlert}/>
          <Button title="Charvi Goyal" color="" onPress={this.displayAlert}/> 
          <Button title="Daksh Gogade" color="hotpink" onPress={this.displayAlert}/> 
          <Button title="Daksh Tank" color="" onPress={this.displayAlert}/>
           <Button title="Divyansh Verma" color="hotpink" onPress={this.displayAlert}/> 
           <Button title="Harshil Patel" color="" onPress={this.displayAlert}/> 
           <Button title="Ishika Rohilla" color="hotpink" onPress={this.displayAlert}/> 
           <Button title="Kajal Aswani" color="" onPress={this.displayAlert}/> 
           <Button title="Lavesh Makhija" color="hotpink" onPress={this.displayAlert}/> 
           <Button title="Lavya Khatri" color="" onPress={this.displayAlert}/>
            <Button title="Lekhnee Gupta" color="hotpink" onPress={this.displayAlert}/> 
            <Button title="Lubhakshi Mangal" color="" onPress={this.displayAlert}/>
             <Button title="Mansh Baswal" color="hotpink" onPress={this.displayAlert}/>
            <Button title="Mohd Rehan" color="" onPress={this.displayAlert}/>
             <Button title="Piyas Khan" color="hotpink" onPress={this.displayAlert}/>
              <Button title="Princy Garg" color="" onPress={this.displayAlert}/> 
              <Button title="Prithwi Sharma" color="hotpink" onPress={this.displayAlert}/>
               <Button title="Priyansh Talreja" color="" onPress={this.displayAlert}/>
                <Button title="Rajnadini Shekhawat" color="hotpink" onPress={this.displayAlert}/>
                 <Button title="Rajveer Gurjar" color="" onPress={this.displayAlert}/> 
                 <Button title="Raveena Moolani" color="hotpink" onPress={this.displayAlert}/> 
                 <Button title="Rhythm Munyar" color="" onPress={this.displayAlert}/> 
                 <Button title="Rohit Kumar Meerwal" color="hotpink" onPress={this.displayAlert}/>
                  <Button title="Ronak Goyal" color="" onPress={this.displayAlert}/>
                   <Button title="Samiksha Mohta" color="hotpink" onPress={this.displayAlert}/> 
                   <Button title="Sangeeta Kanwar" color="" onPress={this.displayAlert}/>
                    <Button title="Shaurya Srimal" color="hotpink" onPress={this.displayAlert}/> 
                    <Button title="Shreya Singh" color="" onPress={this.displayAlert}/> 
                    <Button title="Sri Mukunda Sardar" color="hotpink" onPress={this.displayAlert}/>
                     <Button title="Tanisha Goyal" color="" onPress={this.displayAlert}/> 
                     <Button title="Tarun Tholia" color="hotpink" onPress={this.displayAlert}/> 
                     <Button title="Vivek Sharma" color="" onPress={this.displayAlert}/> 
                     <Button title="Yashika Aggarwal" color="hotpink" onPress={this.displayAlert}/>
                      <Button title="Yashita Gaumat" color="" onPress={this.displayAlert}/>
                       <TouchableOpacity 
            style={[styles.button,{backgroundColor:"hotpink"}]} 
            onPress={()=>this.goToBuzzerScreen("")}>
            <Text style={styles.buttonText}> Done </Text>
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
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'black',

  },

})