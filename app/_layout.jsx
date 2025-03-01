import { Redirect, Stack } from "expo-router";
import { useFonts } from 'expo-font'

export default function RootLayout() {

  useFonts({
    'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'roboto-medium': require('../assets/fonts/Roboto-Medium.ttf')

  })

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
