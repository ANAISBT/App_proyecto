import { Platform, TouchableOpacity } from "react-native";

import HomeScreen from "../screens/Home";
import IonicIcons from '@expo/vector-icons/Ionicons';
import LoginScreen from "../screens/Login";
import MapScreen from "../screens/MapScreen";
import NewTaskScreen from "../screens/NewTaskScreen";
import React from "react";
import TaskDetailsScreen from "../screens/TaskDetailScreen";
import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();

const PlaceNavigator=()=>(
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
        headerStyle:{
            backgroundColor:Platform.OS=="android"?colors.orange: colors.pink,
        },
        headerTintColor:Platform.OS=="android"?colors.black: colors.white,
        headerTitleStyle:{
            fontWeight:"bold",
        }
    }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} options={{title:"Detalles de la Tarea"}}/>
        <Stack.Screen name="NewTask" component={NewTaskScreen} options={{title:"Nueva Tarea"}}/>
        <Stack.Screen name="Map" component={MapScreen} options={{title:"Mapa"}}/>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={({navigation})=>({
            title:"Lista de Tareas",
            headerRight: ()=>(
                <TouchableOpacity onPress={()=> navigation.navigate("NewTask")}>
                    <IonicIcons name="add-circle-outline" 
                    color={colors.white}
                    size={40}
                    style={{marginRight:20}}/>
                </TouchableOpacity>
            )
            })}/>

    </Stack.Navigator>

)

export default PlaceNavigator;