import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import navigationstrings from '../constants/navigationstrings';
// import { InitialScreen, Login, Signup } from '../screens';
import InitialScreen from '../screens/initialscreen/index';
import Login from '../screens/login/index';
import Signup from '../screens/signup/index';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name={navigationstrings.LOGIN}
                component={Login}
                options={{headerShown: false}}
            />
            <AuthStack.Screen
                name={navigationstrings.SIGNUP}
                component={Signup}
                options={{headerShown: false}}
            />
            <AuthStack.Screen
                name={navigationstrings.INITIAL_SCREEN}
                component={InitialScreen}
                options={{headerShown: false}}
            />
            
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;