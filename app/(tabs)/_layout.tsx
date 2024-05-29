import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Dimensions, Pressable, View, Modal, Text } from "react-native";
import Animated, { SharedValue, Extrapolation, RotateInDownLeft, interpolate, useAnimatedStyle } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import * as React from 'react';

import { emojis } from "../utils/items";
//import { withAnchorPoint } from "../utils/anchor-point";
import { CircularCarousel } from "@/components/Circular-Carousel/CircularCarousel";
import registerNNPushToken from "native-notify";

/*const emojis = [require("../../assets/Clown.png"),
require("../../assets/Cool.png"),
require("../../assets/Crying.png"),
require("../../assets/Happy.png"), ,
require("../../assets/In_Love.png"),
require("../../assets/Rich.png"),
require("../../assets/Sad.png"),
require("../../assets/Satisfied.png"),
require("../../assets/Shook.png"), ,
require("../../assets/Silly.png")];*/


export default () => {
  registerNNPushToken(21569, 'UGTsKy65XgPiRSxIL67PGv'); //Timed Notification


  /*//page width
  const width = Dimensions.get('window').width
  //page height
  const height = Dimensions.get('window').height*/
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);


  const [pagingEnabled, setPagingEnabled] = useState(true)
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height




  // For add button page state
  const [openModal, setOpenModal] = React.useState(false)

  // For add button page
  function renderModal() {
    return (
      <Modal visible={openModal} animationType="slide" transparent={true} >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4C9FC1', width: '100%', height: '100%', }}>
          <View style={{ flex: 1, maxHeight: '81.5%', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30 }}> How Are you today? </Text>
            <CircularCarousel data={emojis} />

          </View>
          <Pressable onPress={() => setOpenModal(false)}>
            <Ionicons name="add" color="white" size={40} style={{ alignContent: 'center', verticalAlign: 'bottom', transform: [{ rotate: '45deg' }], }} />
          </Pressable>
        </View>
      </Modal>
    )
  }

  const [rotation, setRotation] = useState(0)

  const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);


  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        bottom: 0,
        left: 16,
        right: 16,
        backgroundColor: "white",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        //marginBottom: 0,
        paddingBottom: 0,
        height: 60,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
          width: 2, height: 2
        }
      },
      tabBarActiveTintColor: "#464646",
      tabBarInactiveTintColor: "#B4B4B4",
    }}
    >

      <Tabs.Screen name="Home" options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home-sharp' : 'home-outline'} color={color} />
        ),

      }} />
      <Tabs.Screen name="Calendar" options={{
        title: 'Calendar',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'calendar-sharp' : 'calendar-outline'} color={color} />
        ),
      }} />


      <Tabs.Screen name="add" options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            width: 60,
            borderRadius: 999,
            backgroundColor: "#4C9FC1",
            marginBottom: 30,
          }} >
            <AnimatedTouchable onPress={() => setOpenModal(true)}>
              <Ionicons name="add" color="white" size={40} />
            </AnimatedTouchable>
            {renderModal()}
          </View>
        )
      }} />

      < Tabs.Screen
        name="Analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'analytics' : 'analytics-outline'} color={color} />
          ),
        }}
      />
      < Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings-sharp' : 'settings-outline'} color={color} />
          ),
        }}
      />
    </Tabs >
  );
};

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