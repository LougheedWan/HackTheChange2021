import React from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert} from "react-native";
import EmotionLog from "../components/emotionLog";
import Deadlines from "../components/deadlines";
const dashboard = ({ navigation }) => {
    return (
        <View style = {styles.form}>
        <ScrollView >
            <Text>DASHBOARD</Text>
            <EmotionLog></EmotionLog>
            <Deadlines></Deadlines>
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