import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const MapScreen=({navigation}) =>{
  return (
    <View style={styles.container}>
        <Text>MapScreen</Text>
    </View>
  )
}

export default MapScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})