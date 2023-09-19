import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Poll from './Poll'

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
     <Poll />
    </View>
  )
}

export default Home