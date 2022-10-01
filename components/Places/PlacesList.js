import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem';

function PlacesList({ places }) {

    if (!places || places.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No places found, maybe start adding some?</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PlaceItem place={item} />}
        />
    )
}


export default PlacesList;

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#86c232'
    },
    fallbackText: {
        fontSize: 16,
    }
})