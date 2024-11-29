import React, {useState} from 'react'
import {datasource} from "./Data";
import {TextInput, View, Text, Button, Alert, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    viewStyle: {
        height: '100%',
        width: '100%',
        marginTop: 50,
        backgroundColor:'#dec3c1',
    },

    textStyle: {
        fontSize: 15,
        margin: 10,
        fontWeight: 'bold',
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20,
        margin:10,
        padding:10,
        borderWidth:2,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 15,
        backgroundColor: '#9c322c',
    }
});

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.name);
    const [image, setImage] = useState(route.params.image);

    return (
        <View style={styles.viewStyle}>
            <View>
                <Text style={styles.headerText}>Name:</Text>
                <TextInput value={name} maxLength={100} style={styles.textStyle}
                           onChangeText= {(text)=> setName(text)}/>
                <Text style={styles.headerText}>Image Url:</Text>
                <TextInput value={image} maxLength={100} style={styles.textStyle}
                           onChangeText= {(text)=> setImage(text)}/>

            </View>

            <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex:1, margin: 10}}>
                    <Button title="SAVE"
                            onPress={()=> {
                                let item = { name: name, image: image };
                                let indexNum = 1;
                                if (route.params.type == 'Poison') {
                                    indexNum = 0;
                                }
                                datasource[indexNum].data[route.params.index].name=name;
                                datasource[indexNum].data[route.params.index].image=image;
                                navigation.navigate("Home");
                            }
                            }
                    />
                </View>
                <View style={{flex:1, margin: 10}}>
                    <Button title="DELETE"
                            onPress={()=> {
                                let indexNum = 1;
                                if (route.params.type == 'Vowels') {
                                    indexNum = 0;
                                }
                                Alert.alert("Are you sure?", '',
                                    [{text: 'Yes', onPress:()=>{
                                            datasource[indexNum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home");
                                        }},
                                        {text: 'No'}])
                            }
                            }
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;
