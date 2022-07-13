import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import { Button } from 'react-native';
import {addPlace} from "../store/PlaceSlices";
import colors from '../utils/colors';
import { useDispatch } from 'react-redux';

const NewTaskScreen=({navigation}) =>{

    const dispatch=useDispatch();
    const [title,setTitle]=useState("");
    const handleTitleChange=(text)=>setTitle(text);
    const handleSave = () =>{
        dispatch(addPlace(title));
        navigation.navigate("Home");
    }

  return (
    <ScrollView style={styles.container}>
        <View style={styles.Detailscontainer}>
            <Text style={styles.title}>Titulo</Text>
            <TextInput 
            style={styles.input} 
            value={title} 
            onChangeText={handleTitleChange}/>
            <Button 
            title="Grabar Dirección" 
            color={colors.green} 
            onPress={()=>handleSave()}/>
        </View>
    </ScrollView>
  )
}

export default NewTaskScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    Detailscontainer:{
        padding: 20,
    },
    title:{
        fontSize:18,
        marginBottom:20,
        color: colors.black,
    },
    input:{
        borderBottomColor: colors.black,
        borderBottomWidth:2,
        marginBottom: 20,
        paddingHorizontal:2,
        paddingVertical:5,
    }
})