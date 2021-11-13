import React from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert} from "react-native";

const emotionLog = ({ navigation }) => {

    return (
        <View style = {styles.form}>
        <ScrollView >
            <Text style = {styles.title}>EmotionLog</Text>
        </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    form: {
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'blue'
    }
});

export default emotionLog;