import React from 'react';
import { Text, View, Easing } from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {HomeScreen} from "./screens/Home";
import {SettingsScreen} from "./screens/Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

// const HomeScreen = ({ navigation }) => (
//   <View style={styles.container}>
//       <Text>HomeScreen</Text>
//       <Button
//           title="Go To Settings Screen"
//           onPress={() => navigation.navigate("Settings")}
//       />
//   </View>
// );

// const SettingsScreen = ({ navigation }) => (
//   <View style={styles.container}>
//       <Text>SettingsScreen</Text>
//       <Button
//           title="Go To Home Screen"
//           onPress={() => navigation.goBack()}
//       />
//   </View>
// );

const FeedScreen = props => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>FeedScreen</Text>
    </View>
);

const DetailsScreen = props => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DetailsScreen</Text>
    </View>
);


const HomeStackNavigator = ({ navigation, route }) => {
    if (route.state) {
        navigation.setOptions({
            tabBarVisible: route.state.index > 0 ? false : true
        });
    }
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
};

const HomeTabNavigator = ({ navigation, route }) => {
    // navigation.parserOptions({headerTitle: getHeaderTitle(route)});

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "ios-home";
                    } else if (route.name === "Feed") {
                        iconName = "logo-rss";
                    } else if (route.name === "Settings") {
                        iconName = "ios-settings";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};


function getHeaderTitle(route) {
    const routeName = route.state ? route.state.routes[route.state.index].name : "Home";

    switch (routeName) {
        case "Home":
            return "Home";
        case "Feed":
            return "Feed";
        case "Settings":
            return "Settings";
    }
}

function shouldHeaderBeShown(route) {
    const routeName = route.state ? route.state.routes[route.state.index].name : "Home";
    switch (routeName) {
        case "Home":
            return false;
    }
}

// transitionSpec
const config = {
    animation: "spring",
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01
    }
};
const closeConfig = {
    animation: "timing",
    config: {
        duration: 500,
        easing: Easing.linear
    }
};

export default function App() {
  return (
      <NavigationNativeContainer>
          <Stack.Navigator
              screenOptions={{
                  gestureEnabled: true,
                  gestureDirection: "horizontal",

                  // ...TransitionPresets.SlideFromRightIOS,

                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

                  // transitionSpec: {
                  //   open: config,
                  //   close: closeConfig
                  // }
              }}
              headerMode="float"
              animation="fade"
          >
              <Stack.Screen
                  // options={{ title: "Home Screen" }}
                  options={({ route }) => ({
                      title: getHeaderTitle(route),
                      headerShown: shouldHeaderBeShown(route)
                  })}
                  name="Home"
                  // component={HomeScreen}
                  component={HomeTabNavigator}
              />
              <Stack.Screen
                  name="Settings"
                  component={SettingsScreen}
              />
          </Stack.Navigator>
      </NavigationNativeContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
