import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

export default function PlaceItem({ place, onSelect }) {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{ uri: place.imageUri }} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    )
}