import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Analytics = () => {

    return (
        <SafeAreaView style={styles.container}>

            <Text>Analytics</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',

    }
});
export default Analytics