import { View, Text, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import HistoryVideoCard from '../../components/HistoryVideoCard';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';


const You = () => {

  const router = useRouter();

  return (
    <View style={styles.profileContainer}>

      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
          <Text style={styles.logoText}>Reeviu</Text>
        </View>
        <View style={styles.headerIcon}>
          <Pressable onPress={() => router.push('/search')}>
            <Ionicons name="search-outline" size={24} color="white" />
          </Pressable>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>
      </View>


      <View style={styles.profileDetails}>
        <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImage} />
        <View>
          <Text style={{ color: 'white', fontSize: 25 }}>Shyam Sharma</Text>
          <Text style={{ color: 'gray', fontSize: 15 }}>shyamkrcse@gmail.com &lt;view channel  </Text>
        </View>
      </View>

      <View style={styles.switchAccountBox}>
        <Text style={styles.switchAccountText}>Switch account</Text>
        <Text style={styles.switchAccountText}>Google account</Text>
      </View>
      <Text style={{ color: 'white', fontSize: 22, fontWeight: 600, padding: 10 }}>History</Text>
      <View style={styles.historyVideoContainer}>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <HistoryVideoCard key={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <Text style={{ color: 'white', fontSize: 22, fontWeight: 600, padding: 10 }}>Playlists</Text>
      <View style={styles.list}>
        <Entypo name="folder-video" size={24} color="white" />
        <Text style={styles.listText}>Your videos</Text>
      </View>
      <View style={[styles.list, { justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
          <AntDesign name="download" size={24} color="white" />
          <Text style={styles.listText}>Downloads</Text>
        </View>
        <MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="white" />
      </View>
      <View style={styles.list}>
        <Entypo name="stopwatch" size={24} color="white" />
        <Text style={styles.listText}>Watch Later</Text>
      </View>
    </View>
  )
}

export default You

let styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  logoImage: {
    width: 35,
    height: 25
  },
  logoText: {
    fontSize: 23,
    fontWeight: 700,
    color: Colors.WHITE,
    fontFamily: 'poppins-medium'
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    padding: 10
  },
  profileDetails: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  profileContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'aqua'
  },
  switchAccountBox: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-start',
    marginTop: 20,
    paddingLeft: 10
  },
  switchAccountText: {
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8
  },
  historyVideoContainer: {
    width: '100%',
    height: 220,
    // borderWidth: 1,
    // borderColor: 'white'
  },
  list: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: 'gray',
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 15
  },
  listText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 600,
  },
  downloadedBtn: {
    position: 'absolute',
    top: '55%',
    left: '95%',

  }
})