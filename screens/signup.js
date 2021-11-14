import React, {useState} from "react";
import { ScrollView, StyleSheet, View, Text, Alert, Form, label, } from "react-native";
import {Card, Title, Button, TextInput} from 'react-native-paper';
import Login from './login';
const LoginScreen = ({ navigation }) => {

    const createUser = () => {
        if((pwConfirm == pw)&&(un != "")&&(pw != "")&&(pwConfirm != "")){
            navigation.navigate('Dashboard');
        }
        else if ((un == "")||(pw == "")||(pwConfirm == "")){
            alert("Please fill out Entire Form");
        }
        else{
            alert("Passwords do not match");
        }
    }

    const [un, setUn] = useState('');
    const [pw, setPw] = useState('');
    const [pwConfirm, setpwConfirm] = useState('');


    return (
        <Card mode = "elevated" style = {styles.form}>
            <Card.Content style = {styles.form}>
            <Title style = {styles.title}>Please Enter the Following Information:</Title>
            <TextInput placeholder = "Username" onChangeText = {un => setUn(un)}></TextInput>
            <TextInput type = "password"  placeholder = "Password" onChangeText = {pw => setPw(pw)}></TextInput>
            <TextInput type = "confirmPassword"  placeholder = "Confirm Password" onChangeText = {pwConfirm => setpwConfirm(pwConfirm)}></TextInput>
            </Card.Content>
            <Card.Actions style = {styles.form}>
            <Button onPress={createUser}>Submit</Button>
            </Card.Actions>
        </Card>
    )
};

const styles = StyleSheet.create({
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#532d84',
        paddingBottom: 30,
        paddingTop: 30
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    loginButton: {
        marginTop: 30
    }
    
});

export default LoginScreen;