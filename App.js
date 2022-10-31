import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View, SafeAreaView } from 'react-native'
import HomeScreen from './app/screens/HomeScreen';

import AppState from './app/AppState/AppState';


// import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';


export default function App() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // const [fontsLoaded] = useFonts({
	// 	"Playfair Display": require("./app/assets/font/PlayfairDisplayBold.ttf"),
	// 	"Montserrat": require("./app/assets/font/MontserratBold.ttf"),
	// 	"Montserrat": require("./app/assets/font/MontserratRegular.ttf"),
  // });
  
  // if (!fontsLoaded) {
  //   return (
  //     <AppLoading />
  //   )
  // } else {}
    
  



  return (
      <AppState />
      // <SafeAreaView style={{ flex: 1, padding: 24 }}>
      //   <HomeScreen />
      // </SafeAreaView>
    );
 
}

