import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './App/Screens/MainTabScreen';
import SupportScreen from './App/Screens/SupportScreen';
import SettingsScreen from './App/Screens/SettingsScreen';
import BookmarkScreen from './App/Screens/BookmarkScreen';
import{ DrawerContent } from './App/Screens/DrawerContent';

import RootStackScreen from './App/Screens/RootStackScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator initialRouteName="Home"> */}
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent { ...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;

//

//import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import {View} from 'react-native';
// import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, StatusBar,Platform } from 'react-native';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
// const win = Dimensions.get("window"); //getting windows dimensions


// export default function App() {

//   return (
//     <View style={{
//       backgroundColor: "#fff",
//       flex: 1,
//      }}
       
//     >
//       <View style={{
//         backgroundColor: "dodgerblue",
//         width: 100,
//         height: 100,
//       }}/>
//       <View style={{
//         backgroundColor: "yellow",
//         width: 100,
//         height: 100,
//       }}/>
//       <View style={{
//         backgroundColor: "red",
//         width: 100,
//         height: 100,
//       }}/>
//     </View>
//   );

  //const handlePress = () => console.log("Text Pressed"); 
  // const { landscape } = useDeviceOrientation();
  // return (

    //we can use safeareaview or view. difference is text alignment safeareaview works in ios phones top alignment perfectly.
    // <SafeAreaView style={styles.container}> 

    

    {/* <Text numberOfLines={1} onPress={handlePress}> numberoflines is used for text should be in one line,*/}
      {/* <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }} 
      ></View> */}
       {/* <Text> Hello, React Native.</Text> */}

       {/* <Image style={styles.imagestyle} source={require("./assets/iconapp.png")} />  we can use image source from our proj or outside*/}
       
       {/* <TouchableHighlight onPress={()=>console.log("Image Pressed")}>
        <Image 
        blurRadius={1}
        source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300"}} />
       </TouchableHighlight> */}
      {/* <StatusBar style="auto" /> */}
    {/* </SafeAreaView>*/}
  // );
//}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
    
//     alignItems: "center",
//     // justifyContent: "center",
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//     //paddingTop: Platform.OS === 'android' ? 40 : 0  //---if alignitem & justifycontent not used, should use these lines;

//   },
//   imagestyle: {
    
//     width: win.width/2, //divide image width by widows width (mobile)
//     height: win.width/2,  //divide image height by widows height (mobile)  
//   },
// });
