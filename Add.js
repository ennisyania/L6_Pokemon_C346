import React, {useState} from 'react'
import {datasource} from "./Data";
import {TextInput, View, Text, Button, StyleSheet} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    viewStyle: {
        height: '100%',
        width: '100%',
        marginTop: 50,
        backgroundColor: '#9c322c',
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
        backgroundColor:'#dec3c1',
    },

});

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    return (
        <View style={styles.viewStyle}>
            <View style={{padding: 10}}>
                <Text style={styles.headerText}>Name:</Text>
                <TextInput style={styles.textStyle} onChangeText= {(text)=> setName(text)}/>
                <Text style={styles.headerText}>Image link:</Text>
                <TextInput style={styles.textStyle} onChangeText= {(text)=> setImage(text)}/>
            </View>

            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value)=>setType(value)}
                    items={[
                        {label:"Fairy", value:"Fairy"},
                        {label:"Poison", value:"Poison"}
                    ]}
                />
            </View>
            <Button title="SUBMIT"
                    onPress={()=> {
                        let item = { name: name, image: image };
                        let indexNum = 1;
                        if (type === 'Poison') {
                            indexNum = 0;
                        }
                        datasource[indexNum].data.push(item);
                        navigation.navigate("Home");
                    }
                    }
            />
        </View>
    );
};
export default Add;
