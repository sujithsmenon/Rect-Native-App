import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
            <Button
                title="Click Here"
                onPress={()=>alert('Button Clicked')} 
            />
        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
});

