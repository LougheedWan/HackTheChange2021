import React from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert} from "react-native";

const LoginScreen = ({ nav }) => {
    return (
        <View style = {styles.form}>
        <ScrollView >
            <Text style = {styles.title}>Welcome!
            </Text>
            <input></input>
            <input></input>
            <Button title="Login" onPress={() => Alert.alert('Login Button pressed')} />
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

export default LoginScreen;