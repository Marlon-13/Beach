import * as React from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


//function to create the google map screen with the listed beaches and rivers
export default function App({navigation}) {
  
  state ={
      coordinates:[
          {name:'1',latitude:50.714531,longitude: -1.881672},
          {name:'2',latitude:50.687366,longitude: -1.937019},
          {name:'3',latitude:50.719504,longitude: -1.803488}
      ]
  }  
  //set pin location
  const [pin, setPin] = React.useState ({latitude: 50.719166,
    longitude: -1.880769})
    
  const [region, setr] = React.useState ({latitude: 50.719166,
    longitude: -1.880769})

  


  
  return (
    <View style={{marginTop:10, flex:1  }}>
      {/*Used for the search bar on the map */}
      <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      GooglePlacesSearchQuery={{
        rankby: "distance"
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      // Key for the api is provided and settings for the search bar    
      query={{
        key: 'AIzaSyD4BhziSzoC3waVycaF1PyYgLW2Wv0a3q0',
        language: 'eng',
        components: "country:GBR",
        types:"establishment",
        radius:30000 
      }}
      styles={{
          container:{flex:0, position:"relative",width:"100%",zIndex: 100},
          listView:{backgroundColor: "white"}
      }}
    />

    
      {/* Generates map at chosen position */}
      <MapView style={styles.map} 
        initialRegion={{
        latitude: 50.719166,
        longitude: -1.880769,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}
    provider="google" // Needed to change IOS user's maps to google maps.
    >
      {/*Inital marker which is dragable */}
      <Marker coordinate={pin}
      pinColor="blue"
      draggable={true}
      onDragStart={(e)=>{
        console.log("Drag start", e.nativeEvent.coordinates)} 
      }
      onDragEnd={(e)=>{
        setPin({
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude
        })} 
      }
      >
        {/*used when pins are pressed */}
        <Callout>
          <Text>Beach track</Text>
        </Callout>
      
        </Marker>
      
          
        <Marker  pinColor="green" coordinate={{latitude: 50.714531, longitude:-1.881672}}>
              <Callout style={{flex: -1, position: 'relative'}}>
                <Text>Bournemouth beach - Low pollution</Text>
                </Callout>
              </Marker>

        <Marker  pinColor="green" coordinate={{latitude: 50.687366, longitude:-1.937019}}>
              <Callout>
                <Text>Sandbanks - Low pollution</Text>
                </Callout>
              </Marker>      
          
        <Marker  pinColor="green" coordinate={{latitude: 50.719504, longitude:-1.803488}}>
              <Callout>
                <Text>SouthBourne - Low pollution</Text>
                </Callout>
              </Marker>

        <Marker  pinColor="red" coordinate={{latitude: 51.588582, longitude:-0.430002}}>
              <Callout>
                <Text>Ruislip lido - Swimming is currently not permitted</Text>
                </Callout>
              </Marker>

        <Marker  pinColor="green" coordinate={{latitude: 50.818864, longitude:-0.137304}}>
              <Callout>
                <Text>Brighton - Low pollution</Text>
                </Callout>
              </Marker>
        <Marker  pinColor="red" coordinate={{latitude: 51.487049, longitude:-0.286770}}>
              <Callout>
                <Text>Kew Pier - Low pollution available for boatrides only</Text>
                </Callout>
              </Marker>                         
      
      <Circle center={pin} radius={1000}/>
      
      
    </MapView>
    
      <View style={{width: 15, height: 15, backgroundColor:"grey"}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});