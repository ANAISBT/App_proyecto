import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

function HomeScreen({navigation}){

  return(
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

export default HomeScreen;

const styles=StyleSheet.create({
    container:{
        flex:1, alingItems: 'center',
    },
})