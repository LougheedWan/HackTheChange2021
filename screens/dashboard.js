import React from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert} from "react-native";

const dashboard = ({ navigation }) => {
    return (
        <View style = {styles.form}>
        <ScrollView >
            <Text>DASHBOARD</Text>
        </ScrollView>
        <Button title="Calendar" onPress={() => 
                navigation.navigate('Calendar')} />
        <Button title="Stats" onPress={() => 
                navigation.navigate('Stats')} />
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

export default dashboard;