import * as React from 'react';
import { Component } from 'react';
import { AppRegistry,StyleSheet, Text, View, Image,FlatList } from 'react-native';
import { defineAnimation } from 'react-native-reanimated';
import flatListData from '../data/flatListData';

//sets the design of flatlist and layout of the information
function FlatListItem (props){

    
        return(
            
            //design for the flatlist
            <View style={{
                flex: 1,
                backgroundColor: props.index % 2 == 0? 'lightblue' : 'white',
                flexDirection:"row",
                
            }}>

            <Image
            source={{uri:props.item.imageUrl}}
            style={{width: 100,height:100,margin:4}}
            ></Image> 
            <View style={{flex:1,flexDirection:"column"}}>
            <Text style={styles.flatListItem} >{props.item.name}</Text>
            <Text style={styles.flatListItem} >{props.item.description}</Text>
            </View>           
            
            </View>
        );
    }



const styles = StyleSheet.create({
    flatListItem:{
        color: 'black',
        padding: 10,
        fontSize: 20,
        
        
    }
});

//returns the flatlist with the selected dataset.
export default function NewsFlatList(props) {
    
    return(
        <View style={{flex:1, margintop:20}}>
            <FlatList
            data={flatListData}
            renderItem={({item, index})=>{
                console.log(`Item = ${JSON.stringify(item)}, index ${index}`);
                return(
                    <FlatListItem item ={item} index={index}>

                    </FlatListItem>
                )
            }
        }
            >
            
            </FlatList>

        </View>

    )
    }


