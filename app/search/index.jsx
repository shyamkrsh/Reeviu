import { View, Text, StyleSheet, TextInput, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';


const Index = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </Pressable>
        <TextInput placeholder='Search something...' placeholderTextColor={"gray"} style={styles.searchInput} />
        <Pressable style={styles.micBtn} onPress={() => router.push('/search/mic')}>
          <Ionicons name="mic-outline" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  )
}

export default Index

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  searchInput: {
    borderWidth: 0.5,
    borderColor: 'gray',
    width: '75%',
    borderRadius: 20,
    padding: 10,
    color: 'white'
  },
  micBtn: {
    width: 45,
    height: 45,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#30302e'
  },

})