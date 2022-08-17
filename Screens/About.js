import * as React from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


//design for the about screen
export default function App({navigation}) {
  

  return (
    <View style={{ 
    flex:1, 
    alignContent:"center", 
    alignItems:"center",
    backgroundColor: "white"
      }}>
     <Image source={require("../Images/safesea.png")}/>
     <View style={{ justifyContent: "center",alignItems: "center"}}>
       <Text style={{
         fontSize:30,textAlignVertical: "center",textAlign: "center"
       }}>
       What is the Safer Seas & Rivers Service?
       </Text>
      {/*Description of the app */}
      <View style={{ justifyContent: "center",alignItems: "center"}}>
       <Text style={{
         fontSize:17,textAlignVertical: "center",textAlign: "center"
       }}>
       Our award-winning, free to use app is the only national real-time water quality service that protects all water users from pollution. The pioneering service alerts water users when sewer overflows discharge untreated human sewage into the sea and when water quality is temporarily reduced due to heavy rainfall and pollution incidents.
       </Text>     
       
     </View>

     <Image 
     style={{}}
     source={require('../Images/seabann.png')}></Image> 
       
     </View> 

    </View>
  );
}

const styles = StyleSheet.create({
  
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});