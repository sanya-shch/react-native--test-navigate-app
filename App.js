import React from 'react';
import { Easing } from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";
import {HomeScreen} from "./screens/Home";
import {SettingsScreen} from "./screens/Settings";

const Stack = createStackNavigator();

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
                  options={{ title: "Home Screen" }}
                  name="Home"
                  component={HomeScreen}
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
