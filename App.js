import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
          title="Go To Settings Screen"
          onPress={() => navigation.navigate("Settings")}
      />
  </View>
);

const SettingsScreen = ({ navigation }) => (
  <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Button
          title="Go To Home Screen"
          onPress={() => navigation.goBack()}
      />
  </View>
);

export default function App() {
  return (
      <NavigationNativeContainer>
          <Stack.Navigator>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
