import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {

    render() {

        return (
            <View style={styles.header}>
            <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '16.2%',
        borderBottomWidth: 12,
        borderBottomColor: "grey",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    text: {
        fontSize: 36,
        letterSpacing: 1.1,
        fontWeight: 'bold',
        color: 'orange'
    }
});