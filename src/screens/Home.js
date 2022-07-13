import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

function HomeScreen({navigation}){

    let showContent=()=>{
        return (
        <View style={styles.container}>
            <Button title='Agregar Tarea' color="#F26419"/>
        </View>
        )
    }

  return(
    <View style={styles.container}>
      <View style={styles.rowContainer1}>
        <TouchableOpacity>
            <Text style={{color:"#2667FF",fontFamily:"OpenSansMedium",fontSize:20}}>Cuenta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer2}>
      <Text style={styles.title}>Lista de Tareas</Text>
      <View>
        showContent();
      </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles=StyleSheet.create({
    container:{
        flex:1, alingItems: 'center',
    },
    title:{
        fontFamily:"OpenSansMediumItalic",
        fontSize:30,
        fontWeight:400,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:8,
    },
    rowContainer1:{
        // flex: 1,
        flexDirection:"row",
        alignItems:"flex-end",
        justifyContent:"flex-end",
        marginTop:10,
        marginRight:20,
        alignSelf:"stretch"
    },
    rowContainer2:{
        // flex: 1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"stretch"
    }
})