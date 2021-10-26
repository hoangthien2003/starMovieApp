import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfileScreen from "./ProfileScreen";
import { Formik } from "formik";

const Stack = createNativeStackNavigator();

const SignupComponent = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0F1B2B" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          borderBottomWidth: 1,
          borderColor: "#2B3543",
          paddingBottom: 15,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../images/SignupScreen/Arrow.png")}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginLeft: 20,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            marginLeft: 109,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            Sign Up
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ marginLeft: 20, marginTop: 30 }}>
          <Formik
            initialValues={{
              username: "",
              email: "",
              phone: "",
              birthday: "",
              password: "",
              retype_password: "",
            }}
          >
            {({ handleChange, values }) => (
              <View>
                <Text style={{ color: "gray", marginBottom: 5, fontSize: 14 }}>
                  USERNAME
                </Text>
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
                      marginTop: 2,
                      marginBottom: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../images/SignupScreen/single-04.png")}
                      style={{ width: 15, height: 15, resizeMode: "contain" }}
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
                <Text
                  style={{
                    color: "gray",
                    marginBottom: 5,
                    marginTop: 10,
                    fontSize: 14,
                  }}
                >
                  EMAIL
                </Text>
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
                      marginTop: 2,
                      marginBottom: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../images/SignupScreen/lock.png")}
                      style={{ width: 15, height: 15, resizeMode: "contain" }}
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
                <Text
                  style={{
                    color: "gray",
                    marginBottom: 5,
                    marginTop: 10,
                    fontSize: 14,
                  }}
                >
                  PHONE
                </Text>
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
                      marginTop: 2,
                      marginBottom: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../images/SignupScreen/mobile-phone.png")}
                      style={{ width: 15, height: 15, resizeMode: "contain" }}
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
                <Text
                  style={{
                    color: "gray",
                    marginBottom: 5,
                    marginTop: 10,
                    fontSize: 14,
                  }}
                >
                  BIRTHDAY
                </Text>
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
                      marginTop: 2,
                      marginBottom: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../images/SignupScreen/calendar-line.png")}
                      style={{ width: 15, height: 15, resizeMode: "contain" }}
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
                <Text
                  style={{
                    color: "gray",
                    marginBottom: 5,
                    marginTop: 10,
                    fontSize: 14,
                  }}
                >
                  PASSWORD
                </Text>
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
                      marginTop: 2,
                      marginBottom: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../images/SignupScreen/lock.png")}
                      style={{ width: 15, height: 15, resizeMode: "contain" }}
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
                <Text
                  style={{
                    color: "gray",
                    marginBottom: 5,
                    marginTop: 10,
                    fontSize: 14,
                  }}
                >
                  RE-TYPE PASSWORD
                </Text>
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
                      marginTop: 2,
                      marginBottom: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../images/SignupScreen/lock-1.png")}
                      style={{ width: 15, height: 15, resizeMode: "contain" }}
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
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#E51937",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ alignItems: "center", marginTop: 15, marginBottom: 15 }}
          >
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const ProfileComponent = () => {
  return <ProfileScreen />;
};

const SignupScreen = () => {
  return (
    <Stack.Navigator initialRouteName="signup">
      <Stack.Screen
        name="signup"
        component={SignupComponent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        component={ProfileComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
