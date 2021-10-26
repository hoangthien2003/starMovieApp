import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const NotificationItems = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderColor: "#2B3543",
        borderStyle: "solid",
      }}
    >
      <View
        style={{
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        <View
          style={[
            styles.background_noti,
            props.status == "success"
              ? styles.background_noti_success
              : props.status == "alarm"
              ? styles.background_noti_alarm
              : props.status == "money"
              ? styles.background_noti_money
              : props.status == "discount"
              ? styles.background_noti_discount
              : styles.background_noti_discount,
          ]}
        ></View>
        <Image
          source={
            props.status == "success"
              ? require("../images/NotificationScreen/like.png")
              : props.status == "alarm"
              ? require("../images/NotificationScreen/alarm.png")
              : props.status == "money"
              ? require("../images/NotificationScreen/currency-dollar.png")
              : props.status == "discount"
              ? require("../images/NotificationScreen/percentage-38.png")
              : require("../images/NotificationScreen/Ellipse-3.png")
          }
          style={{
            marginLeft: 10,
            marginTop: 10,
            width: 15,
            height: 15,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={{ marginLeft: 30, marginTop: 17 }}>
        <Text
          style={{
            color: "white",
            width: 260,
            lineHeight: 20,
            fontSize: 16,
          }}
        >
          {props.text_first}
          <Text style={{ fontWeight: "bold" }}>{props.text_main}</Text>
          <Text>{props.text_end}</Text>
        </Text>
        <Text style={{ fontSize: 14, color: "gray", marginTop: 5 }}>
          {props.hour}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background_noti: {
    width: 35,
    height: 35,
    borderRadius: 60,
    position: "absolute",
  },
  background_noti_success: {
    width: 35,
    height: 35,
    borderRadius: 60,
    position: "absolute",
    backgroundColor: "#083F12",
  },
  background_noti_alarm: {
    width: 35,
    height: 35,
    borderRadius: 60,
    position: "absolute",
    backgroundColor: "#760B1B",
  },
  background_noti_money: {
    width: 35,
    height: 35,
    borderRadius: 60,
    position: "absolute",
    backgroundColor: "#696509",
  },
  background_noti_discount: {
    width: 35,
    height: 35,
    borderRadius: 60,
    position: "absolute",
    backgroundColor: "#0E5670",
  },
});

export default NotificationItems;
