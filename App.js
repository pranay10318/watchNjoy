import { StatusBar } from "expo-status-bar";
import { s } from "react-native-wind";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Cameraa from "./screens/Cameraa";
const tab = createBottomTabNavigator();

export default function App() {
  console.log("yeah one person is got logged in");

  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "black" },
          headerShown: false,
          tabBarActiveTintColor: "white",
        }}
      >
        <tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              <Image
                source={require("./assets/splash.png")}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />;
            },
          }}
        />
        <tab.Screen
          name="reels"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              <Image
                source={require("./assets/icon.png")}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />;
            },
          }}
        />
        <tab.Screen
          name="create_vrideo"
          component={Cameraa}
          options={{
            tabBarIcon: ({ focused }) => {
              <Image
                source={require("./assets/icon.png")}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />;
            },
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: "grey",
  },
  bottomTabIconFocused: {
    tintColor: "white",
  },
});
