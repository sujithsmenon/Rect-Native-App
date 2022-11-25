import React from 'react';
import {View, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    Avatar,
    Caption,
    Drawer,
    Title,
    Text,
    TouchableRipple,
    Paragraph,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://scontent.fccj2-2.fna.fbcdn.net/v/t1.6435-9/89377155_105462087744944_4696733586433245184_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8rVS9qsF7OoAX_yhgm2&_nc_ht=scontent.fccj2-2.fna&oh=d92c3848cd1e7be69af7d14801f31b88&oe=60C1CE0B'
                                }}
                                size={50}
                            />
                            <View style={{flexDirection: 'column', marginLeft: 15}}>
                                <Title style={styles.title}>SUJITH GEORGE</Title>
                                <Caption style={styles.caption}>@sksgeorge</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>                            
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>                            
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label='Home'
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label='Profile'
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label='Bookmarks'
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon 
                                name="cog-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label='Settings'
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon = {({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label='Support'
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preference">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>           
                </View>
            </DrawerContentScrollView >
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon = {({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label='Sign Out'
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    drawerContent: {
        flex: 1,
    },
    drawerSection: {
        marginTop: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    title: {
       fontSize: 16,
       marginTop: 3,
       fontWeight: 'bold',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userInfoSection: {
        paddingLeft: 20,
    },

});