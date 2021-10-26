import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

const starRating = require("../images/StarRating/star.png");
const startRating_default = require("../images/StarRating/star-default.png");

const ratingBar = () => {
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={styles.customRatingBar}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            key={item}
            onPress={() => {
              setdefaultRating(item);
            }}
          >
            <Image
              source={item <= defaultRating ? starRating : startRating_default}
              style={styles.starImgStyle}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  customRatingBar: {
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 18,
  },
  starImgStyle: {
    width: 15,
    height: 15,
    resizeMode: "cover",
    marginRight: 2,
  },
});

export default ratingBar;
