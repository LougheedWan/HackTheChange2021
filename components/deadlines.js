import React, {Component, useState, useEffect} from "react";
import { ScrollView, StyleSheet, View, Text, TextInput, Button, Alert} from "react-native";
import { useFormik } from 'formik';
import ComboDatePicker from "./ComboDatePicker";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton, Card, Title, Colors, Platform,TouchableOpacity} from 'react-native-paper';

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
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
        <View style = {styles.form}>

        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="DueDate">Date of Assignment: </label>
        <ComboDatePicker
            className={"test"}
            id="DueDate" 
            name="DueDate"
        />
        <br></br>
        <label htmlFor="AssignmentName">Assignment Name: </label>
        <input
            id="AssignmentName"
            name="AssignmentName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.AssignmentName}
        />
        <br></br>
        <label htmlFor="Category">Category: </label>
        <input
            id="Category"
            name="Category"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Category}
        />
        <br></br>
        <label htmlFor="Emotion">How are you feeling for the assignment? </label>
        <br></br>
        
        <View style={{flexDirection:'row'}}>
        <IconButton icon = "emoticon-excited-outline" style={{ backgroundColor: state.backgroundColor, padding: 10 }} size={35} onPress={changeColor}></IconButton>
                    <IconButton icon = "emoticon-happy-outline" style={{ backgroundColor: state.backgroundColor2, padding: 10 }} size={35} onPress={changeColor2}/>
                    <IconButton icon ="emoticon-neutral-outline" style={{ backgroundColor: state.backgroundColor3, padding: 10 }} size={35}  onPress={changeColor3}/>
                    <IconButton icon ="emoticon-cry-outline" style={{ backgroundColor: state.backgroundColor4, padding: 10 }} size={35}  onPress={changeColor4}/>
                    <IconButton icon ="emoticon-angry-outline" style={{ backgroundColor: state.backgroundColor5, padding: 10 }} size={35}  onPress={changeColor5}/>

        </View>
        
        <br></br>

        <button type="submit">Submit</button>
        </form>
        </View>
    )
};

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#532d84',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'blue'
    },
});

export default deadlines;