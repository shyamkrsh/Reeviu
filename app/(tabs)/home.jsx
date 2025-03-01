import { Text, View, StyleSheet, Image, FlatList, ScrollView, Pressable } from "react-native";
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import VideoCard from "../../components/VideoCard";
import { useState } from "react";
import Header from "../../components/Header";


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

  const [activeValue, setActiveValue] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <Header />
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

      <View style={styles.videosContainer}>
        <ScrollView>
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
    paddingVertical: 10
  },
  suggestonContainer: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 10
  },
  suggestionBox: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'white',
    margin: 2,
    borderRadius: 8,
  },
  suggestionBoxText: {
    fontSize: 18,
    fontWeight: 500
  },
  videosContainer: {
    width: '100%',
    flex: 1,
    paddingTop: 10
  }
})