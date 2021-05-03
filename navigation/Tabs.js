import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import { Home } from "../screens"

import { COLORS, icons, SIZES } from "../constants"

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
    return (
        <BottomTabBar
            {...props.props}
        />
    )

}

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                height: 30,
                backgroundColor: COLORS.white
            }}
            activeOpacity={1}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
    
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: COLORS.white,
                    elevation: 0,
                    height:80,
                    paddingVertical:SIZES.padding2*2
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={icons.cutlery}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.primary : COLORS.secondary,
                                    alignSelf:'center'
                                }}
                            />
                            <Text style={{paddingTop:10,color: focused ? COLORS.primary : COLORS.darkgray,fontSize:SIZES.body5}}>SWIGGY</Text>

                        </View>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={icons.search}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.primary : COLORS.secondary,
                                    alignSelf:'center'
                                }}
                            />
                            <Text style={{paddingTop:10,fontSize:SIZES.body5,color: focused ? COLORS.primary : COLORS.darkgray,}}>SEARCH</Text>
                        </View>
                    ),

                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Like"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={icons.like}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.primary : COLORS.secondary,
                                    alignSelf:'center'
                                }}
                            />
                            <Text style={{paddingTop:10,fontSize:SIZES.body5,color: focused ? COLORS.primary : COLORS.darkgray,}}>LIKES</Text>
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="User"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={icons.user}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.primary : COLORS.secondary,
                                    alignSelf:'center'
                                }}
                            />
                            <Text style={{paddingTop:10,fontSize:SIZES.body5,color: focused ? COLORS.primary : COLORS.darkgray,}}>ACCOUNT</Text>
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs