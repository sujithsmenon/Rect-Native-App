import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title="Click me" onPress={()=>alert("Profile Button Pressed")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default ProfileScreen;
