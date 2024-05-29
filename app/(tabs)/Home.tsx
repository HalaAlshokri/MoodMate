import { Image, StyleSheet, View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { CircularCarousel } from '@/components/Circular-Carousel/CircularCarousel'
import { emojis } from "../utils/items";
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-reanimated-carousel';


const Home = () => {

    const [pagingEnabled, setPagingEnabled] = useState(true)
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height


    return (
        <View style={{
            backgroundColor: "yellow", flex: 1, alignItems: 'center', justifyContent: 'center'
        }}>
            <StatusBar backgroundColor={'transparent'} translucent hidden={true} />
            <CircularCarousel data={emojis} />

        </View>
    )
}


const styles = StyleSheet.create({
    CarouselItem: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%'
    }
});

export default Home