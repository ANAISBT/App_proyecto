import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const TaskDetailsScreen=({navigation}) =>{
  return (
    <View style={styles.container}>
        <Text>TASKDETAILS</Text>
    </View>
  )
}

export default TaskDetailsScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})