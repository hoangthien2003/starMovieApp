import React from "react";
import { StyleSheet, Image, View } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/SplashScreen/Frame.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E51937",
  },
  logo: {
    width: 75,
    height: 150,
    resizeMode: "contain",
  },
});

export default SplashScreen;
