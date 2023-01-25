import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MoviePoster } from './MoviePoster'

export const HorizontalSlider = ({ title, movies }) => {


    return (
        <View
            style={{ height: (title) ? 260 : 220 }}
        >
            {
                title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, color:'black' }}>{title}</Text>
            }
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
