import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CalendarComp from '@/components/CalendarComp';
//import {Calendar, LocaleConfig} from 'react-native-calendars';



const CalendarP = () => {

    return (
        <View style={styles.containerView}>
            <View ><Text style={styles.headers}>Calendar</Text></View>
            <View style={{justifyContent: 'center'}}><CalendarComp/></View>
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
        //justifyContent: 'center', 
        flex: 1, 
        alignItems: 'stretch',
        paddingHorizontal: 30,
        backgroundColor: "#F9F9FB",
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
    },

});


export default CalendarP