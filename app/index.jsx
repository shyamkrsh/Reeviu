import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Colors from '../constants/Colors'

const Index = () => {

  const router = useRouter()

  return (
    <View style={styles.getStartedContainer}>
      <Image source={require('../assets/images/logo.png')} style={styles.logoImage} />
      <TouchableOpacity onPress={() => router.push("/(tabs)/home")} style={styles.getStartedText} >Get Started</TouchableOpacity>
    </View>
  )
}

export default Index

let styles = StyleSheet.create({
  getStartedContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems : 'center',
  },
  logoImage : {
    width : 300,
    height : 200,
   
  },
  getStartedText : {
    color : 'white',
    fontSize : 20,
    fontWeight : 600,
    marginTop : 30,
    backgroundColor : '#3e4540',
    paddingVertical : 10,
    paddingHorizontal : 25,
    borderRadius : 8
  }
})