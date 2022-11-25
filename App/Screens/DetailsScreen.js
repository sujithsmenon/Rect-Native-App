import React from 'react';
import { Button, Text, View } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        {/* <Button title="accessing welcome screen" onPress={()=>navigation.navigate('Welcome')}/>
        <Button title="accessing Login screen" onPress={()=>navigation.navigate('Login')}/> */}
      </View>
    );
  };

export default DetailsScreen;