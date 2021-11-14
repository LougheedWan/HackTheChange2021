import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, TextInput, Button, Alert} from "react-native";
import { useFormik } from 'formik';
import ComboDatePicker from "./ComboDatePicker";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton, Card, Title, Colors, Platform,TouchableOpacity} from 'react-native-paper';

const deadlines = ({ navigation }) => {
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
                    <IconButton icon = "emoticon-excited-outline" color="#B28DFF" size={35} onPress={() => console.log('Pressed')}></IconButton>
                    <IconButton icon = "emoticon-happy-outline" color="#FDDD5C" size={35} onPress={() => console.log('Pressed')}></IconButton>
                    <IconButton icon ="emoticon-neutral-outline" color="#9BD0B9" size={35} onPress={() => console.log('Pressed')}></IconButton>
                    <IconButton icon ="emoticon-cry-outline" color="#6EB5FF" size={35} onPress={() => console.log('Pressed')}></IconButton>
                    <IconButton icon ="emoticon-angry-outline" color="#FF8FAB" size={35} onPress={() => console.log('Pressed')}></IconButton>

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