import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import CameraScreen from '../../components/CameraScreen'
import Header from '../../components/Header'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const AddVideo = () => {

  const [text, setText] = useState('');

  return (
    <View style={styles.subscriptionContainer}>
      <Header />
      <ScrollView>
        <Text style={{color : 'white', fontSize : 20, fontWeight : 600, padding : 20}}>Upload your videos</Text>
        <View style={styles.uploadVideoContainer}>
          <View style={styles.uploadVideo}>
            <Feather name="upload" size={40} color="gray" />
            <Text style={{ color: 'gray', fontWeight: '600', fontSize: 20 }}>Upload Video</Text>
          </View>
          <View style={styles.uploadVideo}>
            <Ionicons name="images-outline" size={40} color="gray" />
            <Text style={{ color: 'gray', fontWeight: '600', fontSize: 20 }}>Upload Thumbnail</Text>
          </View>

          <TextInput
            style={styles.textarea}
            multiline={true}
            numberOfLines={3}
            placeholder="Type something..."
            value={text}
            onChangeText={setText}
            placeholderTextColor={'gray'}
          />
          <TextInput
            style={styles.textarea}
            multiline={true}
            numberOfLines={4}
            placeholder="write your video description..."
            value={text}
            onChangeText={setText}
            placeholderTextColor={'gray'}
          />

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={{color : 'white', fontSize : 18, fontWeight : 600}}>Submit</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <CameraScreen /> */}
    </View>
  )
}

export default AddVideo

let styles = StyleSheet.create({
  subscriptionContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  uploadVideoContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    gap: 20
  },
  uploadVideo: {
    width: '90%',
    height: 150,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    borderStyle: 'dashed',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textarea: {
    width: '90%',
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    borderRadius: 8,
    color: 'white',
    fontSize: 15
  },
  submitBtn : {
    backgroundColor : 'blue',
    width : '60%',
    height : 40,
    borderRadius : 10,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    marginBottom : 50
  }
})