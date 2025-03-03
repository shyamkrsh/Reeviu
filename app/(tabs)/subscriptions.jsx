import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'
import SubscrbdChannel from '../../components/SubscrbdChannel'
import SubscrbdVideo from '../../components/SubscrbdVideo'

let suggestion = [
  { id: 1, content: 'All' },
  { id: 2, content: 'Today' },
  { id: 3, content: '4 Days' },
  { id: 4, content: 'Coding' },
  { id: 5, content: 'Music' },
  { id: 6, content: 'Data Structure' },
  { id: 7, content: 'TV Show' }
];

const Subscriptions = () => {
  const [activeValue, setActiveValue] = useState(1);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={[...Array(20).keys()]}
        keyExtractor={(item) => item.toString()}
        ListHeaderComponent={() => (
          <>
            {/* Horizontal Scroll - Subscribed Channels */}
            <FlatList
              horizontal
              data={[...Array(10).keys()]}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => <SubscrbdChannel />}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.channelList}
            />

            {/* Horizontal Scroll - Categories */}                                     
            <FlatList
              horizontal
              data={suggestion}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Pressable
                  style={[
                    styles.categoryBox,
                    { backgroundColor: activeValue === item.id ? '#007AFF' : '#333' }
                  ]}
                  onPress={() => setActiveValue(item.id)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      { color: activeValue === item.id ? 'white' : '#bbb' }
                    ]}
                  >
                    {item.content}
                  </Text>
                </Pressable>
              )}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryList}
            />
          </>
        )}
        renderItem={({ item }) => <SubscrbdVideo />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  channelList: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  categoryList: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  categoryBox: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
