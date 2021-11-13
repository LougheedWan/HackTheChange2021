import React from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert} from "react-native";

const stats = ({ navigation }) => {
    return (
        <View style = {styles.form}>
        <ScrollView >
            <Text>Stats</Text>
        </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    form: {
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'blue'
    }
});

export default stats;