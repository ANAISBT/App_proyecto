import AccountScreen from '../screens/Account';
import HomeScreen from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs=()=> {
  return (
    <BottomTabs.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false,
        tabBarLabelStyle:{
            fontFamily:"OpenSansBold",
            paddingBottom:10
        },
        tabBarActiveTintColor:"red",
        tabBarStyle:styles.tabBar,
        }}>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Account" component={AccountScreen} />
    </BottomTabs.Navigator>
  );
}

export default Tabs;