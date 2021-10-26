import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "./SignupScreen";

const Stack = createNativeStackNavigator();
const ProfileComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            marginTop: 35,
            marginLeft: 20,
            marginBottom: 10,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Profile
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("signup");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#E51937",
              marginTop: 27,
              marginLeft: 200,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "#2C3F5B", height: 0.5 }}></View>
      <View style={{ marginTop: 100, marginLeft: 20 }}>
        <Formik initialValues={{ username: "", password: "" }}>
          {({ handleChange, values }) => (
            <View>
              <Text style={{ color: "gray", marginBottom: 5, fontSize: 14 }}>
                USERNAME
              </Text>
              <View
                style={{
                  backgroundColor: "#2B3543",
                  marginBottom: 20,
                  marginRight: 20,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    marginLeft: 12,
                    marginTop: 5,
                    marginBottom: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../images/ProfileScreen/single-04.png")}
                    style={{ width: 20, height: 20, resizeMode: "contain" }}
                  />
                  <TextInput
                    onChangeText={handleChange("username")}
                    value={values.username}
                    style={{
                      color: "white",
                      fontSize: 17,
                      marginBottom: 10,
                      marginTop: 9,
                      marginLeft: 10,
                      width: "100%",
                      height: 20,
                    }}
                    clearTextOnFocus={true}
                  />
                </View>
              </View>
              <Text style={{ color: "gray", marginBottom: 5 }}>PASSWORD</Text>
              <View
                style={{
                  backgroundColor: "#2B3543",
                  marginBottom: 10,
                  marginRight: 20,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    marginLeft: 12,
                    marginTop: 5,
                    marginBottom: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../images/ProfileScreen/lock.png")}
                    style={{ width: 20, height: 20, resizeMode: "contain" }}
                  />
                  <TextInput
                    onChangeText={handleChange("password")}
                    value={values.password}
                    style={{
                      color: "white",
                      fontSize: 17,
                      marginBottom: 10,
                      marginTop: 9,
                      marginLeft: 10,
                      width: "100%",
                      height: 20,
                    }}
                    clearTextOnFocus={true}
                    secureTextEntry={true}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={{ color: "gray", fontSize: 14 }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          marginLeft: 22,
          marginRight: 22,
          backgroundColor: "#E51937",
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
          onPress={() => alert("Login Success!")}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <View style={{ flexDirection: "row", marginRight: 18 }}>
          <View style={{ marginRight: 30 }}>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require("../images/ProfileScreen/Ellipse.png")}
                style={{
                  position: "absolute",
                  width: 40,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
              <Image
                source={require("../images/ProfileScreen/logo-twitter.png")}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: "contain",
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 30 }}>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require("../images/ProfileScreen/Ellipse-2.png")}
                style={{
                  position: "absolute",
                  position: "absolute",
                  width: 40,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
              <Image
                source={require("../images/ProfileScreen/logo-google-plus.png")}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: "contain",
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require("../images/ProfileScreen/Ellipse-1.png")}
                style={{
                  position: "absolute",
                  position: "absolute",
                  width: 40,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
              <Image
                source={require("../images/ProfileScreen/logo-fb-simple.png")}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: "contain",
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const SignupComponent = () => {
  return <SignupScreen />;
};

const ProfileScreen = () => {
  return (
    <Stack.Navigator initialRouteName="profile">
      <Stack.Screen
        name="profile"
        component={ProfileComponent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={SignupComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1B2B",
  },
});

export default ProfileScreen;
