import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const MoviePoster = ({ movie, height = 420, width = 300 }) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                height: height,
                width: width,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
            }}>
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,

    },
    imgContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    }
})