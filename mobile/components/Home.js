import React, { Component } from "react";
import { Button } from "react-native";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { changeText } from "../../store";

class Home extends Component {
    render() {
        return (
            <View>
                <Text style={styles.container}>
                    Home page, props: {this.props.text}
                </Text>
                <Button
                    onPress={this.props.tick}
                    title="Learn More"
                    color="#841584"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        color: "red",
        fontSize: 20
    }
});

const mapDispatchToProps = dispatch => {
    return {
        tick: () => dispatch(changeText())
    };
};

const mapStateToProps = state => {
    return {
        text: state.text
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
