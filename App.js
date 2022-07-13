import AppLoading from 'expo-app-loading';
import React from 'react';
import Root from './src';
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansItalic: require("./assets/fonts/OpenSans-Italic.ttf"),
    OpenSansLight:require("./assets/fonts/OpenSans-Light.ttf"),
    OpenSansLightItalic:require("./assets/fonts/OpenSans-LightItalic.ttf"),
    OpenSansMedium:require("./assets/fonts/OpenSans-Medium.ttf"),
    OpenSansMediumItalic:require("./assets/fonts/OpenSans-MediumItalic.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
  <Root/>
  );
}
