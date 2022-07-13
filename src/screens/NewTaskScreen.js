import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import { Button } from 'react-native-web';
import React from 'react'
import colors from '../utils/colors';

const NewTaskScreen=({navigation}) =>{
  return (
    <ScrollView style={styles.container}>
        <View style={styles.Detailscontainer}>
            <Text style={styles.title}>Titulo</Text>
            <TextInput style={styles.input} />
            <Button title="Grabar Dirección" color={colors.green} onPress={()=>null}/>
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