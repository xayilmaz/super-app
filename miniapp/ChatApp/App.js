import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, NativeModules } from 'react-native'
import AppInfo from './app.json'

const { ConnectNativeModule } = NativeModules;

export default function App(props) {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Chat App</Text>
      <Text style={styles.content}>
        Here props from Super App: {JSON.stringify(props)}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if(AppInfo?.name){
            ConnectNativeModule?.closeApp(AppInfo?.name);
          }
        }}>
        <Text style={styles.contentButton}>Close App</Text>
      </TouchableOpacity>
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
  contentButton: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    margin: 20,
    padding: 16,
    borderRadius: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03346E',
  },
});