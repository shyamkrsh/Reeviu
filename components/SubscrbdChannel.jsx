import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'


const SubscrbdChannel = () => {
    return (
        <View style={styles.channelCardContainer}>
            <Image source={require('../assets/images/profile.jpg')} style={styles.channelLogo} />
            <Text style={styles.channelName}>Shyam...</Text>
        </View>
    )
}

export default SubscrbdChannel

let styles = StyleSheet.create({
    channelCardContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    channelLogo: {
        width: 70,
        height: 70,
        borderRadius: 100,
        margin: 5
    },
    channelName: {
        color: 'white',
        fontSize: 15,
        fontWeight: 500
    }
})