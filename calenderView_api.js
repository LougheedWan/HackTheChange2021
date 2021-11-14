import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Button, Alert} from 'react-native';
import * as Calendar from 'expo-calendar';

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

export default function calendarView() {
    useEffect(() => {
        (async () => {
          const { status } = await Calendar.requestCalendarPermissionsAsync();
          if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
            console.log('Here are all your calendars:');
            console.log({ calendars });
          }
        })();
      }, []);
    
      return (
        <View style={styles.container}>
          <Button title="Create a new calendar" onPress={createCalendar} />
        </View>
      );
}
/*
async function addEvent(newCalendarID) {
    const newCalendarID = await Calendar.createEventAsync({
        calendarId = "newCalendarID", 
        color: 'blue',
        entityType: Calendar.EntityTypes.EVENT,
        sourceId: defaultCalendarSource.id,
        source: defaultCalendarSource,
        name: 'internalCalendarName',
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
      });
      console.log(`Your new event ID is: ${newEventID}`);
}
*/
async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }
  
  async function createCalendar() {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
  }
