import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';


import { useColorScheme } from '@/hooks/useColorScheme';


const StackLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={[styles.container]}>
      <Stack.Screen name="(tabs)" options={{ headerShown: true, headerShadowVisible: true }} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',

  }
});