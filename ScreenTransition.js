import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function ScreenTransition() {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                Hello there!
	        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        //height: 450,
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        ...StyleSheet.absoluteFillObject
    },
    textStyle: {
        borderWidth: 6,
        borderColor: 'red',
        padding: 50,
        margin: 10,
        flex: 1,
        ...StyleSheet.absoluteFillObject
    },
    textStyleTwo: {
        borderWidth: 6,
        borderColor: 'red',
        padding: 50,
        margin: 10,
        flex: 3,
        alignSelf: 'center',
        position: 'absolute'
    }
});
