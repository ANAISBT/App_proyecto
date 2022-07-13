import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const NewTaskScreen=({navigation}) =>{
  return (
    <View style={styles.container}>
        <Text>MapScreen</Text>
    </View>
  )
}

export default NewTaskScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})