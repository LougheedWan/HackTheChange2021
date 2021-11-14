import React from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert, Linking} from "react-native";
import EmotionLog from "../components/emotionLog";
import Deadlines from "../components/deadlines";
const home = ({ navigation }) => {

    return (
        <View style = {styles.form}>
            <Text style = {styles.title}> Resources</Text>
            <Text style={{color: 'blue', font: 18, padding: 30}}
                onPress={() => Linking.openURL('https://www.gundersenhealth.org/health-wellness/live-happy/healthy-ways-to-deal-with-sadness/')}>
                How to Cope with Sadness
            </Text>
            <Text style={{color: 'blue', font: 18, padding: 30}}
                onPress={() => Linking.openURL('https://adaa.org/tips')}>
                Feeling Anxious?
            </Text>
            <Text style={{color: 'blue', font: 18, padding: 30}}
                onPress={() => Linking.openURL('https://blog.rescuetime.com/unmotivated-at-work/')}>
                Unmotivated?
            </Text>
        </View>

    )
      
};

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        },
    title: {
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#532d84'
        }, 
    container: {
        marginTop: 30,
        marginBottom: 10, 
        fontSize: 20,
        alignItems: 'center'
        }
});

export default home;