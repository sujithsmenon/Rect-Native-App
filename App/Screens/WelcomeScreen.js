import React from 'react';

import { Button, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';




const registerHandler = () => {
    alert("register Handler Working");
};

const WelcomeScreen = ({navigation}) => {
    
    return (
      
        <ImageBackground 
            style={styles.background}
            source={require("../assets/background.jpg")} >
            <View style={styles.logoContainer}>
             <Image style={styles.logo} source={require('../assets/logo-red.png')}></Image>    
             <Text style={styles.logoText}>Sell What You Don't Need</Text>
            </View>    
            <View style={styles.loginButton}>
                <Button title="LOGIN" onPress={()  => navigation.navigate("Login")} />
                    {/* <Text style={styles.loginText}>LOGIN</Text>
                </TouchableHighlight> */}
            </View>    
            <View style={styles.registerButton}>
                <TouchableHighlight onPress={registerHandler}>    
                     <Text style={styles.registerText}>REGISTER NEW USER</Text>
                </TouchableHighlight>
            </View>    
        </ImageBackground>
            
    );
};
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        alignSelf: "center",
        backgroundColor: "darkgray",
        alignItems:"center",
        width: "20%",
        height: 30,

    },
    loginText: {
        
        color: "white",
        fontWeight: 'bold',
        fontSize: 22,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems:"center",
        position: "absolute",
        top: 70,
    },
    logoText: {
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: "#4ecdc4",
        alignSelf: "center",
        alignItems:"center",
        width: "55%",
        height: 30,
    },
    registerText: {
        
        color: "blue",
        fontWeight: 'bold',
        fontSize: 22,
    }
})
export default WelcomeScreen;