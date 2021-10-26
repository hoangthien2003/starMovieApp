import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import NotificationItems from "../components/NotificationItems";

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          marginTop: 30,
          marginLeft: 20,
          marginBottom: 10,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Notifications
      </Text>
      <View style={{ backgroundColor: "#2C3F5B", height: 0.5 }}></View>
      <View style={{ marginTop: 5 }}>
        <NotificationItems
          status="success"
          text_first="Congrat! You booked "
          text_main="John Wick 3 "
          text_end="movie ticket successfully."
          hour="10:48:25 AM"
        />
        <NotificationItems
          status="alarm"
          text_first="Hi "
          text_main="Morgan"
          text_end=". This is just a reminder for 
your movie today in 13:45 PM."
          hour="3 hours ago"
        />
        <NotificationItems
          status="money"
          text_first="You’ve got an cashback for the past
ticket booking."
          text_main=""
          text_end=""
          hour="2 days ago"
        />
        <NotificationItems
          status="discount"
          text_first="You just got the discount 30% for
booking a movie in this week."
          text_main=""
          text_end=""
          hour="5 days ago"
        />
        <NotificationItems
          status="success"
          text_first="Congrat! You booked "
          text_main="John Wick 3 "
          text_end="movie ticket successfully."
          hour="4 weeks ago"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1B2B",
  },
});

export default NotificationScreen;
