import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
} from "react-native";
import StarRating from "../components/StarRating";

const HomeScreen = () => {
  const [images1, setImages1] = useState([
    require("../images/HomeScreen/Mask_Group.png"),
    require("../images/HomeScreen/Mask_Group-1.png"),
  ]);
  const [images2, setImages2] = useState([
    require("../images/HomeScreen/Mask_Group-2.png"),
    require("../images/HomeScreen/Mask_Group-3.png"),
  ]);

  const textHeadList1 = ["John Wick 3", "Captain Marvel"];
  const textChildList1 = ["Crime • 2hr 10m | R", "Action • 2hr 25m | PG-13"];

  const textHeadList2 = ["ALITA", "Avengers: The Ultron"];
  const textChildList2 = [
    "Action • 2hr 10m | PG-13",
    "Action • 3hr 00m | PG-18",
  ];

  return (
    <View style={{ backgroundColor: "#0F1B2B", flex: 1 }}>
      <View style={styles.header_bar}>
        <Text style={styles.title}>Star Movie</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={require("../images/HomeScreen/zoom.png")}
            style={styles.search}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#0F1B2B",
          height: 0.5,
          shadowColor: "#000",
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 1.4,
          shadowRadius: 3,
          elevation: 5,
        }}
      ></View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.button_statusmovie}>
          <TouchableOpacity style={styles.nowshowing} activeOpacity={0.9}>
            <Image
              source={require("../images/HomeScreen/frame-c-caret-right.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                margin: 6,
                marginLeft: 25,
              }}
            />
            <Text
              style={{
                marginRight: 25,
                color: "#fff",
              }}
            >
              Now Showing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.comingsoon} activeOpacity={0.9}>
            <Text
              style={{
                marginTop: 8,
                marginBottom: 8,
                marginLeft: 25,
                marginRight: 25,
                color: "gray",
              }}
            >
              Coming Soon
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={images1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Image
                      source={item}
                      key={index}
                      style={styles.image_list1}
                    />
                    <StarRating />
                    <Text style={styles.textHead_list}>
                      {textHeadList1[index]}
                    </Text>
                    <Text style={styles.textChild_list}>
                      {textChildList1[index]}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={images2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Image
                      source={item}
                      key={index}
                      style={styles.image_list2}
                    />
                    <StarRating />
                    <Text style={styles.textHead_list}>
                      {textHeadList2[index]}
                    </Text>
                    <Text style={styles.textChild_list}>
                      {textChildList2[index]}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <StatusBar translucent barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  header_bar: {
    marginTop: 37,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  search: {
    marginLeft: 205,
    marginBottom: 10,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  button_statusmovie: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderWidth: 0.7,
    borderRadius: 20,
    borderColor: "gray",
  },
  nowshowing: {
    alignItems: "center",
    flexDirection: "row",
    margin: 3,
    backgroundColor: "#E51937",
    borderRadius: 15,
  },
  comingsoon: {
    marginRight: 5,
    // borderRadius: 15,
    // backgroundColor: "#E51937",
  },
  image_list1: {
    width: 180,
    height: 220,
    resizeMode: "contain",
    marginTop: 10,
  },
  image_list2: {
    width: 144,
    height: 184,
    resizeMode: "contain",
    marginTop: 10,
    marginRight: 20,
    marginLeft: 18,
  },
  textHead_list: {
    marginLeft: 18,
    marginTop: 5,
    fontWeight: "bold",
    color: "white",
  },
  textChild_list: {
    marginLeft: 18,
    color: "gray",
  },
});

export default HomeScreen;
