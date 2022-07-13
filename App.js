import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"

import React from 'react';
import { firebaseConfig } from './firebase-config';
import {initializeApp} from 'firebase/app';

function HomeScreen(){
  return(
    <View style={{flex:1, alingItems: 'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LoginScreen(){

  const [email,setEmail]=React.useState('')
  const [password,setPasword]=React.useState('')

  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);

  const handleCreateAccount=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(()=>{
      console.log('Cuenta Creada!')
      const user=userCredential.user;
      console.log(user)
    })
    .catch(error=>{
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const handleSignIn=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      console.log('Acceso Exitoso!')
      const user=userCredential.user;
      console.log(user)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <View style={styles.container}>
      <Image source={require('./IMG/af7bbdf02998b9ab0b19e3e5389fa67d.jpg')} style={[styles.image, StyleSheet.absoluteFill]}/>
      <center>
      <ScrollView contentContainerStyle={{
        flex:1,
        width:"100%",
        height:"100%",
        alingItems:'center',
        justifyContent:'center',    
      }}>
        <View style={styles.login}>
        <Image source={require('./IMG/lovepik-girl-writing-thank-you-note-png-image_401867914_wh1200.png')} style={styles.picture}/>
        <View >
          <Text style={{fontSize:17,fontWeight:'600',color:'gray'}}>E-mail</Text>
          <TextInput onChangeText={(text)=>setEmail(text)} style={styles.input} placeholder="nombre@gmail.com"/>
        </View>
        <View >
          <Text style={{fontSize:17,fontWeight:'600',color:'gray'}}>Contraseña</Text>
          <TextInput onChangeText={(text)=>setPasword(text)} style={styles.input} placeholder="Contraseña" secureTextEntry={true}/>
        </View>
        <TouchableOpacity onPress={handleSignIn} style={[styles.button,{backgroundColor:'#00CFEB90'}]}>
          <Text style={{fontSize:17, fontWeight:'600',color:'white'}}>Acceder</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateAccount} style={[styles.button,{backgroundColor:'#00CFEB90'}]}>
          <Text style={{fontSize:17, fontWeight:'600',color:'white'}}>Registrarse</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </center>
    </View>
  );
}

export default function App() {
  return (
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login:{
    width: 350,
    height: 520,
    borderRadius:10,
    borderWidth:2,
    borderColor:"#fff",
    padding:10,
    alingItems:'center',
  },
  picture:{
    width: 150,
    height: 150,
    borderRadius:80,
    borderWidth:3,
    borderColor:"#fff",
    marginBottom:30,
    marginTop:5,
    marginLeft:77,
  },
  input:{
    width: 250,
    height:40,
    borderColor:'#fff',
    borderRadius:10,
    borderWidth:2,
    padding:10,
    marginVertical:10,
    backgroundColor:"#ffffff90",
    marginBottom:20,
    alingItems:'center',
    marginLeft:30,
  },
  button:{
    width: 200,
    height: 40,
    borderRadius:10,
    backgroundColor:'#00CFEB90',
    alingItems:'center',
    justifyContent:'center',
    marginVertical:10,
    marginLeft:54,
    borderColor:'#fff',
    borderWidth:1,
  }
});