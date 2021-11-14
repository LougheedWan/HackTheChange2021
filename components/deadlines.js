import React, {Component, useState, useEffect} from "react";
import { ScrollView, StyleSheet, View,SafeAreaView, Alert} from "react-native";
import { useFormik } from 'formik';
import ComboDatePicker from "./ComboDatePicker";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton, Text, Card, Title, Colors, Platform,TextInput, TouchableOpacity, Button} from 'react-native-paper';

const deadlines = ({ navigation }) => {
    const [state, setState] = useState({
        backgroundColor: 'white',
        backgroundColor2: 'white',
        backgroundColor3: 'white',
        backgroundColor4: 'white',
        backgroundColor5: 'white',
        pressed: false,
      });

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

    const formik = useFormik({
        initialValues: {
            DueDate: '',
            AssignmentName: '',
            Category: '',
            Emotion: '',
        },
        /*
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        */
      });
    return (
        <View style = {styles.form}>

        <form onSubmit={formik.handleSubmit}>
        <br></br>
        <Text style = {styles.title}>Deadline Log</Text>
        <br></br>
        <View style = {styles.container}>
                    <Text><b>Date of Assignment: </b></Text>
        </View>
        <ComboDatePicker
            className={"test"}
            id="DueDate" 
            name="DueDate"
        />
        <br></br>
        <View style = {styles.container}>
                    <Text><b>Assignment Name: </b></Text>
        </View>

        <SafeAreaView>
                    <TextInput styles = {styles.input} placeholder="Enter here"/>
        </SafeAreaView>
        
        <View style={styles.container}>
                    <Text><b> </b></Text>
        </View>
        
    
        <br></br>
        <View style = {styles.container}>
                    <Text><b>Category: </b></Text>
                    </View>

        <SafeAreaView>
            <TextInput styles = {styles.input} placeholder="Enter here"/>
        </SafeAreaView>
        
        <View style={styles.container}>
                    <Text><b> </b></Text>
        </View>

        <br></br>
        <View style = {styles.container}>
                    <Text><b>How are you feeling for the assignment? </b></Text>
        </View>
        <br></br>
        
        <View style={{flexDirection:'row'}}>
        <IconButton icon = "emoticon-excited-outline" style={{ backgroundColor: state.backgroundColor, padding: 10 }} size={35} onPress={changeColor}></IconButton>
                    <IconButton icon = "emoticon-happy-outline" style={{ backgroundColor: state.backgroundColor2, padding: 10 }} size={35} onPress={changeColor2}/>
                    <IconButton icon ="emoticon-neutral-outline" style={{ backgroundColor: state.backgroundColor3, padding: 10 }} size={35}  onPress={changeColor3}/>
                    <IconButton icon ="emoticon-cry-outline" style={{ backgroundColor: state.backgroundColor4, padding: 10 }} size={35}  onPress={changeColor4}/>
                    <IconButton icon ="emoticon-angry-outline" style={{ backgroundColor: state.backgroundColor5, padding: 10 }} size={35}  onPress={changeColor5}/>

        </View>
        
        <br></br>

        <Button mode="contained" onPress={() => alert("Thank you for your submission today!")} >Submit</Button>
        </form>
        </View>
    )
};

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        padding: 30
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

export default deadlines;