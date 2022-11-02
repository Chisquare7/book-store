import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View, SafeAreaView } from 'react-native'
import HomeScreen from './app/screens/HomeScreen';

import AppState from './app/AppState/AppState';


export default function App() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  return (
      <AppState />
      // <SafeAreaView style={{ flex: 1, padding: 24 }}>
      //   <HomeScreen />
      // </SafeAreaView>
    );
 
}

