import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.left}>
                {/* onPress give a class to the view */}
                <TouchableOpacity >
                    <View style={styles.square}></View>
                </TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        opacity: 0.4,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    checked: {
        opacity: 1,
        backgroundColor: 'green',
    },
});

export default Task;