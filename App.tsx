import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import StackAplication from './src/Navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  const [fontsLoaded] = useFonts({
    'DMSans': require('./assets/fonts/DMSans-VariableFont_opsz,wght.ttf'),
    'Adlinnaka-Bold': require('./assets/fonts/Adlinnaka-BoldDemo.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <StackAplication />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
