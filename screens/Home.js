import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

export const HomeScreen = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <Button
                title="Save"
                onPress={() => {
                    navigation.replace("Home");//save the changes
                }}
            />
        )
    });

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
                title="Go To Settings Screen"
                onPress={() => navigation.navigate("Settings")}
            />
            <Button title="Go To Details Screen" onPress={() => navigation.navigate("Details")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});