import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const Subscriptions = () => {
  return (
    <View style={styles.subscriptionContainer}>
      <Text style={styles.alert}>Working ....</Text>
    </View>
  )
}

export default Subscriptions

let styles = StyleSheet.create({
  subscriptionContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },
  alert: {
    color: 'white',
    fontSize: 25,
    fontWeight: 700,
    textAlign: 'center'
  }
})