import { View, Text, Image, FlatList, Pressable, ScrollView } from 'react-native'
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
      <ScrollView>
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
      </ScrollView>
    </View>
  )
}

export default You

let styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444", // Subtle bottom border for separation
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoImage: {
    width: 40,
    height: 30,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.WHITE,
    fontFamily: "poppins-medium",
  },
  headerIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
    padding: 10,
  },
  profileDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: "#222", // Adds a nice card effect
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#00FFFF", // Neon Aqua border for a premium look
  },
  switchAccountBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    paddingHorizontal: 15,
  },
  switchAccountText: {
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "#333", // Slightly dark background for button effect
    fontSize: 14,
  },
  historyVideoContainer: {
    width: "100%",
    height: 220,
    paddingHorizontal: 10,
  },
  list: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    margin: 8,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A", 
    elevation: 4, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    gap: 15
  },
  listText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
