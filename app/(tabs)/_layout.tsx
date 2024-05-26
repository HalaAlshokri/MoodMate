import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";


export default () => {
  return (
    <Tabs screenOptions={{
      headerShown: true,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        bottom: 0,
        left: 16,
        right: 16,
        backgroundColor: "black",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        //marginBottom: 0,
        paddingBottom: 0,
        height: 60,
      },

    }}>

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
            <Ionicons name="add" color="white" size={30} />
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