import React, { Component } from "react";
import Home from "./mobile/components/Home";
import { StyleSheet, Text, View } from "react-native";
import store from "./store";
import { Provider } from "react-redux";

console.log(store);

export default class App extends Component {
    render() {
        return (
            <Provider store={store()}>
                <View style={styles.container}>
                    <Text>Hello!</Text>
                    <Home />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
