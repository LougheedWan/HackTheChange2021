import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, Alert, TouchableOpacity, Switch, Image} from 'react-native';
import {Calendar, Agenda} from 'react-native-calendars';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton, Card, Title, TextInput, Colors, Platform, Button} from 'react-native-paper';


const calendar = ({ navigation }) => {
    return (
        <View style = {styles.form}>
        <ScrollView >
            <Text>Calendar</Text> 
        </ScrollView>
        </View>
    )
};

// const styles = StyleSheet.create({
//     form: {
        
//     },
//     title: {
//         fontWeight: 'bold',
//         fontSize: 30,
//         color: 'blue'
//     }
// });


export default class AgendaScreen extends Component {
    state = {
      items: {}
    };

 
    render() {
      type items = {
          name: String;
          mood: String;
      }
      return (
        <Agenda
          //testID={testIDs.agenda.CONTAINER} 
          items={{'2021-11-11': [{name: 'Pick up dry cleaning                                                                     9:00 AM - 9:30 AM                                      Downtown Laundromat', 
           mood: 'mad'
          
          }, 
          {name: 'Lunch with Alice from Paris                                     12:00 PM - 1:30 PM                                                                Superb Steakhouse'}], 
    
          '2021-11-14': [{name: 'CPSC 413 Dynamic Programming Quiz             12:00 PM - 2:00 PM                                      Science A'}, 
          {name: 'Mental Health & Covid-19 Webniar                     5:00 PM - 7:00 PM                                                                Zoom'}]}}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={'2021-11-11'}
          renderItem={this.renderItem.bind(this)}
          
          //renderEmptyDate={() => {() => {return (<View />);}}

          renderEmptyData = {() => {return (<View style={styles.item}>
            <Text>This is an empty date!</Text>
          </View>);}}


          rowHasChanged={this.rowHasChanged.bind(this)}
          showClosingKnob={true}
          hideKnob = {false}

          markingType={'multi-dot'}

             markedDates={{
                 '2021-11-09': {dots: [excited, happy, neutral], selected: false},
                 '2021-11-11': {dots: [mad, excited], selected: false, selectedColor: "#673ab7"},
                 '2021-11-14': {dots: [sad, neutral], selected: false, marked: true}
             }}
          
          monthFormat={'MMMM yyyy'}
          theme = {{arrowColor: "#673ab7", monthTextColor: "#532d84", dayTextColor: "#866ca8", indicatorColor: "#cbc0da", selectedDayBackgroundColor: '#673ab7',
                  agendaDayTextColor: '#644290',
                  agendaDayNumColor: '#644290', agendaTodayColor: '#644290',
                  agendaKnobColor: '#644290'}}
        
           hideExtraDays={false}
        />
      );
    }
  
    loadItems(day) {
      setTimeout(() => {

        // for (let i = -15; i < 85; i++) {
        //   const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        //   const strTime = this.timeToString(time);
        //   if (!this.state.items[strTime]) {
        //     this.state.items[strTime] = [];
        //     const numItems = Math.floor(Math.random() * 3 + 1);
        //     for (let j = 0; j < numItems; j++) {
        //       this.state.items[strTime].push({
        //         name: 'Item for ' + strTime + ' #' + j,
        //         height: Math.max(50, Math.floor(Math.random() * 150))
        //       });
        //     }
        //   }
        // }

        const newItems = {};
        Object.keys(this.state.items).forEach(key => {
          newItems[key] = this.state.items[key];
        });
        this.setState({
          items: newItems
        });
      }, 1000);
    }
  
    renderItem(item) {
      return (
        <TouchableOpacity
          //testID={testIDs.agenda.ITEM}
          style={[styles.item, {height: item.height}]}
          onPress={() => Alert.alert(item.name)}
        >
          <Text>{item.name}
           {/* if(item.mood:'Mad') {
              <View style={styles.item}>
                  <Image style={styles.logo}
                    source={{uri: 'https://uofc-my.sharepoint.com/:i:/g/personal/sunah_lee_ucalgary_ca/Ee-FcZqZzqxMlzdMKeepQO8BR9KmJAMYg0KP7DZgOMWRPQ?e=2bmFv2'}} 


                  />
              </View>

           } */}
          
          </Text>
           <Text>{item.mood ? `🍪` : `😋`}</Text>
          

        </TouchableOpacity>
      );
    }
  
    renderEmptyDate() {
      return (
        <View style={styles.emptyData}>
          <Text>This is empty date!</Text>
        </View>
      );
    }
  
    rowHasChanged(r1, r2) {
      return r1.name !== r2.name;
    }
  
    timeToString(time) {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    }
  }
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    emptyData: {
      height: 15,
      flex: 1,
      paddingTop: 30
    },

    logo: {
        width: 50,
        height: 50,
        alignContent: 'center'
    }
  });









const excited = {key: 'excited', color: '#B28DFF', selectedDotColor: '#B28DFF'};
const happy = {key: 'happy', color: '#F8DF81', selectedDotColor: '#F8DF81'};
const neutral = {key: 'neutral', color: '#9BD0B9', selectedDotColor: '#9BD0B9'};
const sad = {key: 'sad', color: '#6EB5FF', selectedDotColor: '#6EB5FF'};
const mad = {key: 'mad', color: '#FF8FAB', selectedDotColor: '#FF8FAB'};

// export default class CalendarView extends React.Component {
//     render() {
//       return (
//         <View style={{ paddingTop: 50, flex: 1 }}>
        
//          <Calendar
//             // Initially visible month. Default = Date()
//             current={'2021-11-01'}
//             // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//             minDate={'2021-11-01'}
//             // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//             maxDate={'2021-11-30'}
//             // Handler which gets executed on day press. Default = undefined
//             onDayPress={day => {console.log('selected day', day);}}
//             // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
//             monthFormat={'MMMM yyyy'}
//             // Handler which gets executed when visible month changes in calendar. Default = undefined
//             onMonthChange={month => {
//               console.log('month changed', month);
//             }}
//             // Hide month navigation arrows. Default = false
//             hideArrows={false}

//             theme = {{arrowColor: "#673ab7", monthTextColor: "#532d84", dayTextColor: "#866ca8", indicatorColor: "#cbc0da"}}

//             // Do not show days of other months in month page. Default = false
//             hideExtraDays={false}
//             // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
//             // day from another month that is visible in calendar page. Default = false
//             disableMonthChange={false}
//             // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
//             firstDay={1}
//             markingType={'multi-dot'}

//             markedDates={{
//                 '2021-11-09': {dots: [excited, happy, neutral], selected: false},
//                 '2021-11-11': {dots: [sad, mad], selected: false},
//                 '2021-11-13': {dots: [sad, neutral], selected: true, selectedColor: "#673ab7", marked: true}
//             }}
            
//             /*
//             markedDates={{
//                 '2021-11-09': {marked: true, dots: [{selectedDotColor:'#B28DFF'}], disableTouchEvent: false},
//                 '2021-11-11': {selected: false, marked: true, dotColor: '#6EB5FF'},
//                 '2021-11-13': {selected: true, selectedColor: "#673ab7", marked: true, dotColor: '#FF8FAB', disableTouchEvent: true},
//             }}
//             */
//           />














//         </View>
//       );
//     }
//   }
/*export default calendarView;*/

