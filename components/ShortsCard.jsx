import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get("window");

const ShortsCard = () => {
    return (
        <View style={styles.shortCardContainer}>
            <Image source={require('../assets/images/shorts.jpg')} style={styles.shortsThumbnail} />
        </View>
    )
}

export default ShortsCard

let styles = StyleSheet.create({
    shortCardContainer: {
        width: width,
        height: height,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shortsThumbnail: {
        width: width,
        height: height,
        borderRadius: 10,
        opacity : 0.7
    }
})