import { StyleSheet,ActivityIndicator,View } from "react-native";
import React from "react";


export default function ActivityIndicatorKullanimif() {

    return (
        <View style={styles.container}>

            <ActivityIndicator size="large" color="#0000ff" />
            <ActivityIndicator size="small" color="#00ff00" />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"

    }

});