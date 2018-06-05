import React from "react";
import { View } from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
// import HomeRoute from "../"
import FeedScreen from "../screens/FeedScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/NotificationScreen";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import LikeScreen from "../screens/LikeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CommentScreen from "../screens/CommentScreen";


const TabNavigation = TabNavigator(
    {
        Home:{
            screen: FeedScreen,
            navigationOptions:{
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name={focused ? "ios-home" : "ios-home-outline"}
                        size={30}
                        color={"black"}
                    />
                )
            }
        },
        Search:{
            screen: SearchScreen,
            navigationOptions:{
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name={focused ? "ios-heart" : "ios-heart-outline"}
                        size={30}
                        color={"black"}
                    />
                )
            }
        },
        AddPhoto:{
            screen: TakePhotoScreen,
            navigationOptions:{
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name={"ios-add-circle-outline"}
                        size={30}
                        color={"black"}
                    />
                )
            }
        },
        Notification:{
            screen: NotificationScreen,
            navigationOptions:{
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name={focused ? "ios-person" : "ios-person-outline"}
                        size={30}
                        color={"black"}
                    />
                )
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions:{
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name={focused ? "ios-home" : "ios-home-outline"}
                        size={30}
                        color={"black"}
                    />
                )
            }
        },
        // Like:{
            
        // },
        // Comment:{
            
        // }
    }
)

export default TabNavigation;