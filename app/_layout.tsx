import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack, useNavigation } from "expo-router"
import { StyleSheet, SafeAreaView, View } from 'react-native';


import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import registerNNPushToken from 'native-notify';






const StackLayout = () => {
  registerNNPushToken(21569, 'UGTsKy65XgPiRSxIL67PGv');

  const colorScheme = useColorScheme();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ justifyContent: 'center' }}>
      {/*<StatusBar backgroundColor={'transparent'} translucent />*/}
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },

      }}>
        <Stack.Screen name="(tabs)" options={{
          headerShown: false, headerShadowVisible: false, headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'green',

        }} />
      </Stack>
    </View>
  )
}

