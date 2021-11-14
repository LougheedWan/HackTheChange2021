import React from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert} from "react-native";
import HomePage from "./home"
import CalendarPage from "./calendarView";
import StatsPage from "./stats"
import Resources from './resources'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const dashboard = ({ navigation }) => {

    return (
        <Tab.Navigator shifting={false} >
            <Tab.Screen name = "Home" component={HomePage}/>
            <Tab.Screen name = "Calendar" component={CalendarPage}/>
            <Tab.Screen name = "Stats" component={StatsPage}/>
            <Tab.Screen name = "Resources" component={Resources}/>
        </Tab.Navigator>
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