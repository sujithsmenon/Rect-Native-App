import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';


const LoginScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button title="go to details screen" onPress={()  => navigation.navigate("Details")}/>
          <Button title="go to Home screen" onPress={()  => navigation.navigate("Home")}/>
          <Button title="go to Welcome screen" onPress={()  => navigation.navigate("Welcome")}/>
        </View>
    );
};

export default LoginScreen;