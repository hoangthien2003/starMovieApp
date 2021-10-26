import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/SplashScreen";
import BottomTabs from "./src/components/BottomTabs";

const Stack = createNativeStackNavigator();

const SplashComponent = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("BottomTabs");
  }, 3000);
  return <SplashScreen />;
};

const BottomTabsComponent = () => {
  return <BottomTabs />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabsComponent}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
