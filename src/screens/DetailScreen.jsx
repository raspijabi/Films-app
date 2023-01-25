import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MovieDetails } from '../components/MovieDetails'
import { useMovieDetails } from '../hooks/useMovieDetails'

const screenHeight = Dimensions.get('screen').height

export const DetailScreen = ({ route, navigation }) => {

    const movie = route.params

    const { isLoading, movieFull, cast } = useMovieDetails(movie.id)

    return (
        <ScrollView>
            <View style={styles.imgContainer} >
                <View style={styles.imgBorder} >
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                        style={styles.image}
                    />
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                {
                    isLoading ? <ActivityIndicator size={35} color={'grey'} style={{ marginTop: 20, }} />
                        : <MovieDetails movieFull={movieFull} cast={cast} />
                }
            </View>

            <View
                style={{
                    position: 'absolute',
                    margin: 24
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >

                    <Text
                        style={{
                            color: 'white',
                            fontSize: 70,
                            fontWeight: '700',
                        }}
                    >
                        ←
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,

    },
    imgContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        overflow: 'hidden',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    },
    textContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
        color:'black'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold', 
        color:'black'
    },
    imgBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
})