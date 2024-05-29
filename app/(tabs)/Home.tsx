import { Image, StyleSheet, View, Text, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import { CircularCarousel } from '@/components/Circular-Carousel/CircularCarousel'
import { emojis } from "../utils/items";
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-reanimated-carousel';
import { ScrollView } from 'react-native';
//import { ButtonToolbar, IconButton } from 'rsuite';
//import SearchIcon from '@rsuite/icons/Search';
import { IconButton, Button, MD3Colors } from 'react-native-paper';
import { getHeight } from 'rsuite/esm/DOMHelper';






const Home = () => {

    const [pagingEnabled, setPagingEnabled] = useState(true)
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height

    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' })
    const year = today.getFullYear();


    return (
        <View style={[{
            backgroundColor: "#F9F9FB",
        }, styles.containerView]}>
            <StatusBar backgroundColor={'transparent'} translucent hidden={true} />
            {/*<CircularCarousel data={emojis} />*/}
            <Text style={[styles.headers, { paddingTop: -30 }]}>
                Inspirations...
            </Text>
            <View style={{ paddingBottom: 30, width: "auto", marginRight: 30 }}>
                <ScrollView horizontal style={styles.scrollerHorizontal} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <IconButton
                        icon="music"
                        iconColor='#464646'//{MD3Colors.error50}
                        size={35}
                        onPress={() => console.log('Pressed')}
                        style={[styles.scrollerButton, { marginLeft: -25 }]}
                    />
                    <IconButton
                        icon="youtube"
                        iconColor='#464646'//{MD3Colors.error50}
                        size={35}
                        onPress={() => console.log('Pressed')}
                        style={styles.scrollerButton}
                    />
                    <IconButton
                        icon="book-open-blank-variant"
                        iconColor='#464646'//{MD3Colors.error50}
                        size={35}
                        onPress={() => console.log('Pressed')}
                        style={styles.scrollerButton}
                    />
                    <IconButton
                        icon="movie"
                        iconColor='#464646'//{MD3Colors.error50}
                        size={35}
                        onPress={() => console.log('Pressed')}
                        style={[styles.scrollerButton]}
                    />
                </ScrollView>
                <Text style={styles.headers}>
                    {month} {year}
                </Text>
            </View>
            <ScrollView style={styles.scrollerVertical} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={styles.scrollviewLogs}></View>
                <View style={styles.scrollviewLogs}></View>
                <View style={styles.scrollviewLogs}></View>
                <View style={styles.scrollviewLogs}></View>
            </ScrollView>
            <View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    CarouselItem: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: '100%'
    },
    headers: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'left',
        paddingBottom: 20,
        paddingTop: 30
    },
    containerView: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 30
    },
    scrollerHorizontal: {
        height: 100,
        width: "100%",
        paddingHorizontal: 30,
        overflow: 'visible'
    },
    scrollerVertical: {
        height: "100%",
        width: "100%",
        overflow: 'hidden',
        marginTop: -25
    },
    scrollerButton: {
        backgroundColor: "white",
        height: "80%",
        aspectRatio: 1,
        marginHorizontal: 25,

    },
    scrollviewLogs: {
        width: '100%',
        backgroundColor: 'white',
        //aspectRatio: 10
        height: 80,
        overflow: 'hidden',
        borderRadius: 20,
        marginVertical: 10
    }
});

export default Home