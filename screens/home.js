import React from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert} from "react-native";
import EmotionLog from "../components/emotionLog";
import Deadlines from "../components/deadlines";
const home = ({ navigation }) => {

    return (
        <View>
             <EmotionLog></EmotionLog>
            <Deadlines></Deadlines>
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

export default home;