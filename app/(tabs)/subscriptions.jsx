import { View, Text, StyleSheet, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'
import SubscrbdChannel from '../../components/SubscrbdChannel'
import SubscrbdVideo from '../../components/SubscrbdVideo'


let suggeston = [
  {
    id: 1,
    content: 'All',
  },
  {
    id: 2,
    content: 'Today',
  },
  {
    id: 3,
    content: '4 Days',
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

const Subscriptions = () => {

  const [activeValue, setActiveValue] = useState(0);


  return (
    <View style={styles.subscriptionContainer}>
      <Header />
      <View style={styles.channelsContainer}>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <SubscrbdChannel key={item} />}
        />
      </View>
      <View style={styles.suggestonContainer}>
        <FlatList
          horizontal
          data={suggeston}
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) =>
            <Pressable key={item.id} style={[styles.suggestionBox, { backgroundColor: activeValue == item.id ? 'white' : 'black' }]} onPress={() => setActiveValue(item.id)}>
              <Text style={[styles.suggestionBoxText, { color: activeValue == item.id ? 'black' : 'white' }]}>{item.content}</Text>
            </Pressable>
          }
        />
      </View>
      <View style={styles.videosContainer}>
        <ScrollView>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => <SubscrbdVideo key={item} />)
          }
        </ScrollView>
      </View>

    </View>
  )
}

export default Subscriptions

let styles = StyleSheet.create({
  subscriptionContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  channelsContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
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