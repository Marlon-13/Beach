
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,Image, FlatList, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MapScreen from './Screens/Home';
import AboutScreen from './Screens/About'
import NewsScreen from './Screens/News'
import {MaterialIcons} from '@expo/vector-icons'
import NewsList from './Screens/News'

import Icon from 'react-native-ionicons';

//used to generate image in header
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./Images/saferseas.png')}
    />
  );
}

const Tab = createBottomTabNavigator();

//creates the bottom tab navigator and appearence for the tab.
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={({ route})=>({
        
        tabBarIcon:({color})=>{
          let iconName;

          if (route.name === 'Locations'){
            iconName = 'location-pin';
          } else if (route.name === 'About'){
            iconName ='eco'
          }else if (route.name === 'News'){
            iconName ='dashboard'
          }
          return <MaterialIcons name={iconName} size={30} color={'white'}/>
        },
        tabBarStyle:{
          backgroundColor: 'lightblue'
          
          
        }
      })} >
        
        <Tab.Screen 
        
        name="Locations" 
        component={MapScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle:{
          backgroundColor: "lightblue"
          },
          headerTitle: props => <LogoTitle {...props} />
        
        }}
        
        
        />

        <Tab.Screen name="About" 
        component={AboutScreen}
        options={{      
          
          headerTitleAlign: "center",
          headerStyle:{
          backgroundColor: "lightblue",
          },
          headerTitle: props => <LogoTitle {...props}/>
        
        }}
      
        />
        <Tab.Screen name="News" 
        component={NewsList}
        options={{
          headerTitleAlign: "center",
          headerStyle:{
          backgroundColor: "lightblue"            
          },
          headerTitle: props => <LogoTitle {...props}/>
        
        }}
        />   
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

