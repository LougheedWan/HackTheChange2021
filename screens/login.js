import React from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert} from "react-native";

const LoginScreen = ({ navigation }) => {

    return (
        <View style = {styles.form}>
        <ScrollView >
            <Text style = {styles.title}>Welcome
            </Text>
            <input placeholder = "Username"></input>
            <input placeholder = "Password"></input>
            <Button title="Login" onPress={() => 
                navigation.navigate('Dashboard')} />
        </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    form: {
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'blue'
    }
});

export default LoginScreen;