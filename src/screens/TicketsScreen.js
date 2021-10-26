import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const TicketsScreen = () => {
  return (
    <View style={{ backgroundColor: "#0F1B2B", height: "100%" }}>
      <Text style={styles.title}>Tickets</Text>
      <View style={{ backgroundColor: "#2C3F5B", height: 0.5 }}></View>
      <ScrollView>
        <View style={styles.tickets}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../images/TicketsScreen/Mask_Group.png")}
              style={{
                width: 300,
                height: 180,
                resizeMode: "cover",
                marginTop: 30,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </View>
          <View style={styles.infoTickets}>
            <Text
              style={{
                color: "white",
                marginTop: 15,
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              John Wick 3: Parabellum
            </Text>
            <View style={{ marginTop: 15, marginLeft: 20 }}>
              <View>
                <Text style={styles.textHead_infoTickets}>THEATRE</Text>
                <Text style={styles.textChild_infoTickets}>Paragon Cinema</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View style={{ marginLeft: 20, marginRight: 50 }}>
                <Text style={styles.textHead_infoTickets}>DATE</Text>
                <Text style={styles.textChild_infoTickets}>24 May, 2019</Text>
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.textHead_infoTickets}>TIME</Text>
                <Text style={styles.textChild_infoTickets}>
                  8:30 - 10:00 AM
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                marginLeft: 20,
                marginBottom: 15,
              }}
            >
              <View style={{ marginRight: 20 }}>
                <Text style={styles.textHead_infoTickets}>HALL</Text>
                <Text style={styles.textChild_infoTickets}>C</Text>
              </View>
              <View style={{ marginRight: 76 }}>
                <Text style={styles.textHead_infoTickets}>ROW</Text>
                <Text style={styles.textChild_infoTickets}>E</Text>
              </View>
              <View>
                <Text style={styles.textHead_infoTickets}>SEAT</Text>
                <Text style={styles.textChild_infoTickets}>E4, E5</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                paddingBottom: 15,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../images/TicketsScreen/Group.png")}
                  style={{
                    width: 260,
                    height: 50,
                    resizeMode: "contain",
                    marginTop: 15,
                  }}
                />
              </View>
              <View
                style={{ flexDirection: "row", marginLeft: 23, marginTop: 5 }}
              >
                <Text style={{ marginRight: 75 }}>P A R</Text>
                <Text> 3 1 1 7 7 0 1 3 2 0 6 3 7 5</Text>
              </View>
            </View>
            <View style={{ backgroundColor: "#0F1B2B" }}>
              <View
                style={{
                  backgroundColor: "#B2B2B2",
                  height: 10,
                  marginLeft: 20,
                  marginRight: 20,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "#565656",
                  height: 10,
                  marginLeft: 40,
                  marginRight: 40,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              ></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 10,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  infoTickets: {
    backgroundColor: "#2B3543",
    marginLeft: 36,
    marginRight: 36,
  },
  textHead_infoTickets: {
    color: "gray",
    fontSize: 12,
  },
  textChild_infoTickets: {
    color: "white",
    marginTop: 3,
    fontWeight: "bold",
  },
});

export default TicketsScreen;
