import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const HistoryVideoCard = () => {
    return (
        <View>
            <Image source={require('../assets/images/shorts.jpg')} style={styles.historyVideoThumbnail} />
            <Text style={styles.videoTitle}>Do you know AI</Text>
        </View>
    )
}

export default HistoryVideoCard

let styles = StyleSheet.create({
    historyVideoThumbnail : {
        width : 150,
        height : 210,
        borderRadius : 20,
        margin : 10,
        opacity : 0.8
    },
    videoTitle : {
        color : 'white',
        position : 'absolute',
        padding : 20,
        fontSize : 15,
        fontWeight : 600,
        bottom : 0
    }
})