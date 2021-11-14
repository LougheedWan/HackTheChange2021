import React, {Component, useState, useEffect} from "react";
import { ScrollView, SafeAreaView, StyleSheet, View, Text, Alert} from "react-native";
//import FontistoIcon from 'react-native-vector-icons/Fontisto';
//import EntypoIcon from 'react-native-vector-icons/Entypo';
//import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StatsPage from "../screens/stats"
import { IconButton, Card, Title, TextInput, Colors, Platform, Button,TouchableOpacity} from 'react-native-paper';
import moment from 'moment';

const emotionLog = ({ navigation }) => {

    const [currentDate, setCurrentDate] = useState('');
    const [state, setState] = useState({
        backgroundColor: 'white',
        backgroundColor2: 'white',
        backgroundColor3: 'white',
        backgroundColor4: 'white',
        backgroundColor5: 'white',
        pressed: false,
      });

    console.log(state);
  
    /*
    useEffect(() => {
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      setCurrentDate(
        ' ' + date + '/' + month + '/' + year + '   ' + hours + ':' + min 
      );
    }, []);
    */

    useEffect(() => {
        var date = moment()
                      .utcOffset('-07:00')
                      .format('DD/MM/YYYY   h:mm a');
        setCurrentDate(date);
      }, []);
    
      const changeColor = () => {
        if (!state.pressed) {
          setState({
            backgroundColor: '#B28DFF',
            backgroundColor2: 'white',
            backgroundColor3: 'white',
            backgroundColor4: 'white',
            backgroundColor5: 'white',
          });
        }
      };
    
      const changeColor2 = () => {
        if (!state.pressed) {
          setState({
            backgroundColor: 'white',
            backgroundColor2: '#FDDD5C',
            backgroundColor3: 'white',
            backgroundColor4: 'white',
            backgroundColor5: 'white',
          });
        }
      };
      const changeColor3 = () => {
        if (!state.pressed) {
          setState({
            backgroundColor: 'white',
            backgroundColor2: 'white',
            backgroundColor3: '#9BD0B9',
            backgroundColor4: 'white',
            backgroundColor5: 'white',
          });
        }
      };
     const changeColor4 = () => {
        if (!state.pressed) {
          setState({
            backgroundColor: 'white',
            backgroundColor2: 'white',
            backgroundColor3: 'white',
            backgroundColor4: '#6EB5FF',
            backgroundColor5: 'white',
          });
        }
      };
     const changeColor5 = () => {
        if (!state.pressed) {
          setState({
            backgroundColor: 'white',
            backgroundColor2: 'white',
            backgroundColor3: 'white',
            backgroundColor4: 'white',
            backgroundColor5: '#FF8FAB',
          });
        }
     };
  

    return (
        <View style = {styles.form}>
        <ScrollView >
            <Text style = {styles.title}>Emotions Log</Text>

                <View style = {styles.container}>
                    <Text><b>Date & Time</b></Text>
                    <Text style={styles.textStyle}>{currentDate}</Text>
                </View>

                <View style={styles.container}>
                    <Text><b>How are you feeling right now? </b></Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <IconButton icon = "emoticon-excited-outline" style={{ backgroundColor: state.backgroundColor, padding: 10 }} size={35} onPress={changeColor}></IconButton>
                    <IconButton icon = "emoticon-happy-outline" style={{ backgroundColor: state.backgroundColor2, padding: 10 }} size={35} onPress={changeColor2}/>
                    <IconButton icon ="emoticon-neutral-outline" style={{ backgroundColor: state.backgroundColor3, padding: 10 }} size={35}  onPress={changeColor3}/>
                    <IconButton icon ="emoticon-cry-outline" style={{ backgroundColor: state.backgroundColor4, padding: 10 }} size={35}  onPress={changeColor4}/>
                    <IconButton icon ="emoticon-angry-outline" style={{ backgroundColor: state.backgroundColor5, padding: 10 }} size={35}  onPress={changeColor5}/>
                </View>

                <View style={styles.container}>
                    <Text><b>Reflection: </b></Text>
                </View>

                <SafeAreaView>
                    <TextInput styles = {styles.input} placeholder="Enter here"/>
                </SafeAreaView>

                <View style={styles.container}>
                    <Text><b> </b></Text>
                </View>

                <Button mode="contained" onPress={() => alert("Thank you for your submission today!")}>Submit</Button>

        </ScrollView>
        </View>
    )

};

/*
<AntDesignIcon.Button name="smileo" solid></AntDesignIcon.Button>
<AntDesignIcon.Button name="frowno" solid></AntDesignIcon.Button>
<EntypoIcon.Button name="emoji-happy"></EntypoIcon.Button>
<EntypoIcon.Button name="emoji-neutral"></EntypoIcon.Button>
<EntypoIcon.Button name="emoji-sad"></EntypoIcon.Button>
<FontistoIcon.Button name="smiley" solid></FontistoIcon.Button>
<FontistoIcon.Button name="slightly-smile" solid></FontistoIcon.Button>
<FontistoIcon.Button name="neutral" solid></FontistoIcon.Button>
<FontistoIcon.Button name="frowning" solid></FontistoIcon.Button>
<FontistoIcon.Button name="rage" solid></FontistoIcon.Button>
            
*/

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

export default emotionLog;

