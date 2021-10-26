import React, { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import TicketsScreen from "../screens/TicketsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tabs = createMaterialBottomTabNavigator();

const HomeComponent = () => {
  return <HomeScreen />;
};

const TicketsComponent = () => {
  return <TicketsScreen />;
};

const NotificationComponent = () => {
  return <NotificationScreen />;
};

const ProfileComponent = () => {
  return <ProfileScreen />;
};

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: "#0F1B2B" }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeComponent}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require(`../images/BottomTabs/movie-reel.png`)}
                style={{
                  width: 26,
                  height: 26,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Tickets"
        component={TicketsComponent}
        options={{
          headerShown: false,

          tabBarIcon: () => {
            return (
              <Image
                source={require(`../images/BottomTabs/event-ticket.png`)}
                style={{
                  width: 26,
                  height: 26,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Notification"
        component={NotificationComponent}
        options={{
          headerShown: false,

          tabBarIcon: () => {
            return (
              <Image
                source={require(`../images/BottomTabs/alarm.png`)}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require(`../images/BottomTabs/single-03.png`)}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
