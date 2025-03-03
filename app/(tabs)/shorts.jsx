import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Header from "../../components/Header";
import ShortsCard from "../../components/ShortsCard";

const { height, width } = Dimensions.get("window");

const Shorts = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => (
          <View style={styles.shortsContainer}>
            <ShortsCard />
          </View>
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={height} 
      />
    </View>
  );
};

export default Shorts;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.BACKGROUND,
  },
  shortsContainer: {
    height: height,
    width: width, 
    justifyContent: "center",
    alignItems: "center",
  },
});
