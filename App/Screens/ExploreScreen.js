import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const ExploreScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title="Click me" onPress={()=>alert("Explore Button Pressed")} />
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

export default ExploreScreen;