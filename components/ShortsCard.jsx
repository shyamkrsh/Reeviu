import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const { height, width } = Dimensions.get("window");


const ShortsCard = () => {
    return (
        <View style={styles.shortCardContainer}>
            <Image source={require('../assets/images/shorts.jpg')} style={styles.shortsThumbnail} />
            <View style={styles.actionContainer}>
                <View style={styles.actionBtn}>
                    <AntDesign name="like2" size={30} color="white" />
                    <Text style={styles.actionText}>2.3K</Text>
                </View>
                <View style={styles.actionBtn}>
                    <AntDesign name="dislike2" size={30} color="white" />
                    <Text style={styles.actionText}>Dislike</Text>
                </View>
                <View style={styles.actionBtn}>
                    <MaterialCommunityIcons name="comment-text-outline" size={30} color="white" />
                    <Text style={styles.actionText}>4.5K</Text>
                </View>
                <View style={styles.actionBtn}>
                    <FontAwesome6 name="share-square" size={25} color="white" />
                    <Text style={styles.actionText}>Share</Text>
                </View>
                <View style={styles.actionBtn}>
                    <AntDesign name="sync" size={25} color="white" />
                    <Text style={styles.actionText}>Remix</Text>
                </View>

            </View>

            <View style={styles.channelInfoContainer}>
                <View style={styles.channelInfo}>
                    <Image source={require("../assets/images/channelLogo.jpeg")} style={styles.channelLogo} />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Shyam Sharma</Text>
                    <TouchableOpacity style={styles.subscribeBtn}>
                        <Text >Subscribe</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.videoTitle}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Learn AI in just 5 minutes, #shorts || #Shyam link is in description ...</Text>
                </View>
            </View>

        </View>
    )
}

export default ShortsCard

let styles = StyleSheet.create({
    shortCardContainer: {
        width: width,
        height: height,
        flexDirection: 'column',
    },
    shortsThumbnail: {
        width: width,
        height: height,
        borderRadius: 10,
        opacity: 0.7
    },
    actionContainer: {
        position: 'absolute',
        width: 50,
        height: 400,
        flexDirection: 'column',
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 200
    },
    actionText: {
        color: 'white'
    },
    actionBtn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    channelInfoContainer: {
        flexDirection: 'column',
        position: 'absolute',
        left: 15,
        bottom: 150
    },
    channelInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap : 15
    },
    channelLogo: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    subscribeBtn: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    videoTitle : {
        width : '90%',
        padding : 10
    }
})