import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, NativeModules } from 'react-native'

const { ConnectNativeModule } = NativeModules;

export default function App() {

  const [input, setInput] = useState('');

  const LIST_APPS = [
    {
      appName: 'ChatApp',
      bundleId: `index.${Platform.OS}-1.bundle`,
    },
    {
      appName: 'ShoppingApp',
      bundleId: `index.${Platform.OS}-2.bundle`,
    },
  ];

  const goToNextApp = useCallback(
    async (item) => {
      ConnectNativeModule?.openApp(
        item.appName,
        item.bundleId,
        {
          text: input,
        },
        false,
        () => { },
      );

      const result = await ConnectNativeModule?.getBundleNames();
      return result;
    },
    [input],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Input send to miniapp</Text>
      <TextInput
        value={input}
        style={styles.input}
        onChangeText={text => setInput(text)}
        placeholder="Value to send to mini app"
      />
      <View style={styles.content}>
        {LIST_APPS.map(app => (
          <TouchableOpacity
            key={app?.bundleId}
            style={styles.buttonApp}
            onPress={() => goToNextApp(app)}>
            <Text style={styles.appName}>{app?.appName}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  content: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    color: "#03346E",
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 18,
    color: '#fff',
  },
  buttonApp: {
    width: 200,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: '#03346E',
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    color: "#03346E",
    borderColor: "#03346E",
  },
});