import React from 'react'
import { FlatList, Text, View } from 'react-native'
import 'intl'
import 'intl/locale-data/jsonp/en'
import { CastItem } from './CastItem'

export const MovieDetails = ({ movieFull, cast }) => {
    return (
        <>
            <View style={{ marginHorizontal: 20, marginBottom: 50, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{color:'black'}}>★ {movieFull.vote_average} </Text>
                    <Text style={{ marginLeft: 5, color:'black' }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color:'black' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16, paddingTop: 5, color:'black' }}>{movieFull.overview}</Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color:'black' }}>Presupuesto</Text>
                <Text style={{ fontSize: 18, color:'black' }}> {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(movieFull.budget)}</Text>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20, color:'black' }}>
                        Actores
                    </Text>
                    <FlatList
                        data={cast}
                        horizontal={true}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <CastItem actor={item}/>}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 10, height: 90, paddingLeft: 10}}
                    />
                </View>
            </View>
        </>
    )
}
