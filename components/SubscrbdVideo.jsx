import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/Colors'

const SubscrbdVideo = () => {


    return (
        <View style={styles.cardContainer}>
            <View style={styles.videoContent}>
                <View>
                    <Image source={require("../assets/images/channelLogo.jpeg")} style={styles.channelLogo} />
                </View>
                <View>
                    <Text style={styles.videoTitle}>Learn youtube thumbnail design in 5 minutes only ...</Text>
                    <View style={styles.channelInfo}>
                        <Text style={styles.channelInfoText}>Channel Name</Text>
                        <Text style={styles.channelInfoText}>27 Million</Text>
                        <Text style={styles.channelInfoText}>5 hours ago</Text>
                    </View>
                </View>
            </View>
            <View style={styles.thumbnail}>
                <Image source={require("../assets/images/thumbnail.jpg")} style={styles.thumbnail} />
            </View>
        </View>
    )
}

export default SubscrbdVideo

let styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 320,
        marginVertical: 2,
        borderRadius: 5,
        padding: 10
    },
    thumbnail: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    videoContent: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    videoTitle: {
        color: Colors.WHITE,
        fontSize: 18,
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontWeight: 600
    },
    channelLogo: {
        height: 40,
        width: 40,
        borderRadius: 100,
    },
    channelInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 2
    },
    channelInfoText: {
        color: '#d1c9c9',
        marginHorizontal: 10
    }
})