import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const CastItem = ({actor}) => {
    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}`}}
                        style={{width: 70, height: 70, borderRadius: 10}}
                    />
                )
            }
            <View style={styles.actorInfo}>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 10, color:'black'}}>{actor.name}</Text>
                <Text style={{fontSize: 16, opacity: 0.7, fontWeight: 'bold', marginLeft: 10, color:'black'}}>{actor.character}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 6,
        elevation: 9,
        marginRight: 30,
        paddingRight: 15,
        height: 70, 
    },
    actorInfo: {
        marginTop: 10,

    }
})