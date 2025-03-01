import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'
import ShortsCard from '../../components/ShortsCard'

const { height } = Dimensions.get("window");

const Shorts = () => {

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={() => (
            <View style={styles.shortsContainer}>
              <ShortsCard />
            </View>
          )}
          pagingEnabled={true} 
          showsVerticalScrollIndicator={false} 
          snapToAlignment="start" 
          decelerationRate="fast"
        />

      </View>
    </View>
  )
}

export default Shorts

let styles = StyleSheet.create({
  container: {
    flex: height,
    backgroundColor: Colors.BACKGROUND
  },
  shortsContainer: {
    height: height,
    gap: 10
  }
})