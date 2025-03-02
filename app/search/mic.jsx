import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

const Mic = () => {

    const router = useRouter()

    return (
        <View style={styles.container} >
            <Pressable style={styles.crossBtn} onPress={() => router.back()}>
                <Entypo name="cross" size={35} color="white" />
            </Pressable>
            <FontAwesome name="assistive-listening-systems" size={100} color="white" />
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600, marginTop: 20 }}>Listening....</Text>
        </View>
    )
}

export default Mic

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    crossBtn: {
        position: 'absolute',
        left: 10,
        top: 10
    }
})