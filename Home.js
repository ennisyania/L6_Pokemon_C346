import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, Image, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {datasource} from "./Data";



const styles = StyleSheet.create({
    images: {
        alignSelf: 'flex-end',
        width: 240,
        height: 336,
    },

    textStyle: {
     fontSize: 15,
     margin: 10,
        fontWeight: 'bold',
   },
    headerText: {
     fontSize: 20,
     marginTop:10,
        padding:10,
     borderWidth:2,
     textAlign: 'center',
     fontWeight: 'bold',
     borderRadius: 15,
  },
   opacityStyle: {
      justifyContent:"space-evenly",
       alignItems:'center',
       borderWidth: 2,
       borderColor: '#dec3c1',
       flex:1,
       flexDirection: 'row',
       backgroundColor: '#9c322c',
       padding: 5,
       borderRadius: 15,
   },
});

const Home = ({navigation}) => {
    const renderItem = ({item, index, section}) => {
        return(
            <TouchableOpacity style={styles.opacityStyle}
                              onPress={() => {
                                  navigation.navigate("Edit",{index:index,type:section.title,name:item.name,image:item.image})}}>
            >
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image source={{ uri: item.image }} style = {styles.images} onError={(error) => console.log('Image Load Error:', error.nativeEvent)}/>
            </TouchableOpacity>
        )
    }

    return (
      <View style={{marginTop: 50, backgroundColor:'black'}}>
          <Button
              title="ADD POKEMON"
              onPress={() => {
                  navigation.navigate('Add');
                  console.log("Add Pokemon button pressed");
              }}
          />
        <StatusBar hidden={true}></StatusBar>
        <SectionList sections={datasource}
                     renderItem={renderItem}
                     renderSectionHeader={({section:{title,bgColor}})=>(
                         <Text style={[styles.headerText,{backgroundColor:bgColor}]}>{title}</Text>
                     )} />
      </View>
  )
}

export default Home;
