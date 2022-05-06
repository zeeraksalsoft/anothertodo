import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationstrings from '../constants/navigationstrings';
// import { Home, TodaysList, TodaysCalender, Account } from '../screens';
import Home from '../screens/home/index';
import Account from '../screens/account/index';
import Colors from '../constants/colors';
import {View, Image, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './HomeStack';
import TodaysListStack from './TodaysListStack';

const BottomTab = createBottomTabNavigator(); 


const TabRoutes = () => {
    return(
        <BottomTab.Navigator
            initialRouteName={navigationstrings.TODAYS_LIST}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: Colors.PURPLE,
                tabBarInactiveTintColor: Colors.BLACK,
                tabBarStyle: {
                    backgroundColor: Colors.BASECOLOR,
                    elevation: 0,
                },
            }}
        >
            <BottomTab.Screen
                name={navigationstrings.HOME}
                component={HomeStack}
                options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                <Image 
                                    source={require('../assets/images/home.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: focused? Colors.PURPLE: Colors.BLACK
                                    }}
                                />
                                {
                                    focused?
                                    <Text style={{color: Colors.PURPLE, marginLeft: 5}}>Home</Text>
                                    :
                                    null
                                }
                            </View>
                        )
                    }}
                />
            <BottomTab.Screen
                name={navigationstrings.TODAYS_LIST}
                component={TodaysListStack}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                            <Image 
                                source={require('../assets/images/add.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused? Colors.PURPLE: Colors.BLACK
                                }}
                            />
                            {
                                focused?
                                <Text style={{color: Colors.PURPLE, marginLeft: 5}}>Add Task</Text>
                                :
                                null
                            }
                        </View>
                    )
                }}
            />
                {/* <BottomTab.Screen name={navigationstrings.TODAYS_CALENDER} component={TodaysCalender} options={{
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image 
                                    source={require('../assets/images/home.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: focused? Colors.PURPLE: Colors.BLACK
                                    }}
                                />
                            </View>
                        )
                    }}/> */}
            <BottomTab.Screen
                name={navigationstrings.ACCOUNT}
                component={Account}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                            <Image 
                                source={require('../assets/images/account.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused? Colors.PURPLE: Colors.BLACK
                                }}
                            />
                            {
                                focused?
                                <Text style={{color: Colors.PURPLE, marginLeft: 5}}>Account</Text>
                                :
                                null
                            }
                        </View>
                    )
                }}
            />
        </BottomTab.Navigator>
    );
}

export default TabRoutes;