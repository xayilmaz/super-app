import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App(props) {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Shopping App</Text>
      <Text style={styles.content}>
        Here props from Super App: {JSON.stringify(props)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: '#03346E',
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: 'grey',
  },
});