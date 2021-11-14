import React, {useState} from "react";
import { ScrollView, StyleSheet, View, Text, Alert} from "react-native";
import {Card, Title, Button, TextInput} from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
    
    console.log(global.addedUsers);
    const authorize = () => {

        // as of right now we do hard coded authorization:
        // very insecure way of logging in
        if (un == "admin" && pw == "123"){
            alert("success");
            navigation.navigate('Dashboard');
        }
        else {
            alert("incorrect username or password, please try again");
        }
    }

    const newUser = () => {
        navigation.navigate('Signup')
    }
    const [un, setUn] = useState('');
    const [pw, setPw] = useState('');

    return (
        <Card mode = "elevated" style = {styles.form}>
            <Card.Content style = {styles.form}>
            <Title style = {styles.title}>Welcome</Title>
            <TextInput placeholder = "Username" onChangeText = {un => setUn(un)}></TextInput>
            <TextInput secureTextEntry={true}  placeholder = "Password" onChangeText = {pw => setPw(pw)}></TextInput>
            </Card.Content>
            <Card.Actions style = {styles.form}>
            <Button onPress={authorize}>Login</Button>
            <Button onPress={newUser}>SignUp</Button>
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
        color: 'purple',
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