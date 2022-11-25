import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './login/LoginScreen';
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";
import WelcomeScreen from "./WelcomeScreen";

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const LoginStack = createStackNavigator();
const WelcomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsStackScreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="aperture" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    );
};

export default MainTabScreen;

const ExploreStackScreen = ({navigation}) => (
    <ExploreStack.Navigator screenOptions={{
      headerStyle: {
         backgroundColor: '#009387', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
         headerTitleStyle: {alignSelf: 'center'},
        headerLeft: () => (
         <Icon.Button name="menu" size={25}
         backgroundColor="#009387" onPress={() => navigation.toggleDrawer()}></Icon.Button> 
        )
      }} />
    </ExploreStack.Navigator>
);
const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
         backgroundColor: '#009387', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
         headerTitleStyle: {alignSelf: 'center'},
        headerLeft: () => (
         <Icon.Button name="menu" size={25}
         backgroundColor="#009387" onPress={() => navigation.toggleDrawer()}></Icon.Button> 
        )
      }} />
    </ProfileStack.Navigator>
);
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
         backgroundColor: '#009387', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: "OverView",
        headerTitleStyle: {alignSelf: 'center'},
        headerLeft: () => (
         <Icon.Button name="menu" size={25}
         backgroundColor="#009387" onPress={() => navigation.toggleDrawer()}></Icon.Button> 
        )
      }} />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
         backgroundColor: '#009387', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
         headerTitleStyle: {alignSelf: 'center'},
        headerLeft: () => (
         <Icon.Button name="menu" size={25}
         backgroundColor="#009387" onPress={() => navigation.toggleDrawer()}></Icon.Button> 
        )
      }} />
      
    </DetailsStack.Navigator>
);

const WelcomeStackScreen = ({navigation}) => (
    <WelcomeStack.Navigator screenOptions={{
      headerStyle: {
         backgroundColor: '#009387', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} options={{
        
        headerLeft: () => (
         <Icon.Button name="menu" size={25}
         backgroundColor="#009387" onPress={() => navigation.toggleDrawer()}></Icon.Button> 
        )
      }}/>
    </WelcomeStack.Navigator>
);
  
const LoginStackScreen = ({navigation}) => (
    <LoginStack.Navigator screenOptions={{
      headerStyle: {
         backgroundColor: '#009387', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <LoginStack.Screen name="Login" component={LoginScreen} options={{
        
        headerLeft: () => (
         <Icon.Button name="menu" size={25}
         backgroundColor="#009387" onPress={() => navigation.toggleDrawer()}></Icon.Button> 
        )
      }} />
    </LoginStack.Navigator>
);
  