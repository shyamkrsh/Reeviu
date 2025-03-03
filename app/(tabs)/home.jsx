import { Text, View, StyleSheet, Image, FlatList, ScrollView, Pressable } from "react-native";
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import VideoCard from "../../components/VideoCard";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";


let suggeston = [
  {
    id: 1,
    content: 'All',
  },
  {
    id: 2,
    content: 'Hollywood',
  },
  {
    id: 3,
    content: 'Bollywood',
  },
  {
    id: 4,
    content: 'Coding',
  },
  {
    id: 5,
    content: 'Music',
  },
  {
    id: 6,
    content: 'Data Structure',
  },
  {
    id: 7,
    content: 'TV Show',
  }
]
export default function Home() {
  const [activeValue, setActiveValue] = useState(1);

  useEffect(() => {
    console.log("Fetching videos...");
    axios.get(`https://reeviubackend.onrender.com/api/videos/all`).then((res) => {
      console.log(res?.data?.data);
    }).catch((err) => {
      console.log(err);
    })

  }, [])


  return (
    <View style={styles.mainContainer}>
      <Header />


      <View style={styles.videosContainer}>
        <ScrollView>
          <View style={styles.suggestonContainer}>
            <AntDesign name="find" size={24} color="white" />
            <FlatList
              horizontal
              data={suggeston}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) =>
                <Pressable style={[styles.suggestionBox, { backgroundColor: activeValue == item.id ? 'white' : 'black' }]} onPress={() => setActiveValue(item.id)}>
                  <Text style={[styles.suggestionBoxText, { color: activeValue == item.id ? 'black' : 'white' }]}>{item.content}</Text>
                </Pressable>
              }
            />
          </View>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => <VideoCard key={item} />)
          }
        </ScrollView>
      </View>
    </View>
  );


}
let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  suggestonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#444", // Subtle bottom border
  },
  suggestionBox: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: "#333", // Darker background for a sleek look
    borderWidth: 1,
    borderColor: "#666", // Subtle border effect
    elevation: 4, // Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  suggestionBoxText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  videosContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
