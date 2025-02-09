import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Stack from './Native/Stack'

export default function App() {
  return (
    <View style={styles.container}>
    <Stack/>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
        flex: 1,
       
      },
})



