import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { Link, useRouter } from 'expo-router'

const Header = () => {

    const router = useRouter();

    return (
        <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>Reeviu</Text>
            </View>
            <View style={styles.headerIcons}>

                <Pressable onPress={() => router.push('/search')}>
                    <Ionicons name="search-outline" size={24} color="white" />
                </Pressable>
                {/* <FontAwesome name="user-circle-o" size={24} color="white" /> */}
                <Pressable onPress={() => router.push('/(tabs)/you')}>
                    <Image source={require("../assets/images/profile.jpg")} style={styles.profileImage} />
                </Pressable>
            </View>
        </View>
    )
}

export default Header

let styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 10
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    logoImage: {
        width: 35,
        height: 25
    },
    logoText: {
        fontSize: 23,
        fontWeight: 700,
        color: Colors.WHITE,
        fontFamily: 'poppins-medium'
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white'
    },
})