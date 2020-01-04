import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {useIsFocused} from "@react-navigation/native";

export const SettingsScreen = ({ navigation }) => {
    const isFocused = useIsFocused();
    return (
        <View style={styles.container}>
            <Text style={{ color: isFocused ? "green" : "black" }}>
                SettingsScreen
            </Text>
            <Button title="Go To Home Screen" onPress={() => navigation.goBack()} />
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