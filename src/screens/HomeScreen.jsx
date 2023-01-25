import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider'
import { GradientBackground } from '../components/GradientBackground'
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColors'
import { GradientContext } from '../context/GradientContext'

const { width } = Dimensions.get('window')

export const HomeScreen = () => {

    const { nowPlaying = [], popular, topRated, upcoming, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

    const { setMainColors, setPrevMainColors } = useContext(GradientContext)

    const getPosterColors = async (index) => {
        const movie = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

        const [primary, secondary] = await getImageColors(uri)
        setMainColors({ primary, secondary })
    }

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0)
        }
    }, [nowPlaying])


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color={'blue'} size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{}} >
                <GradientBackground>
                    <View style={{ height: 440, marginTop: top + 20 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }) => <MoviePoster movie={item} />}
                            sliderWidth={width}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)}
                        />
                    </View>
                </GradientBackground>

                <HorizontalSlider title={'Populares'} movies={popular} />
                <HorizontalSlider title={'Top rated'} movies={topRated} />
                <HorizontalSlider title={'Upcoming'} movies={upcoming} />
            </View>
        </ScrollView >
    )
}
