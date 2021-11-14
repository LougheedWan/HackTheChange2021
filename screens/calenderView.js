import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Button, Alert} from 'react-native';
import calendarView from '../calenderView_api';

const calendar = ({ navigation }) => {
    return (
        <View style = {styles.form}>
        <ScrollView >
            <Text>Calendar</Text>
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

export default calendarView;