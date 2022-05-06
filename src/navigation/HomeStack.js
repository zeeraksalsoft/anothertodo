import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationstrings from '../constants/navigationstrings';
import { Home } from '../screens';
import TodaysCalenderStack from './TodaysCalenderStack';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={navigationstrings.HOME} component={Home}/>
            <Stack.Screen name={navigationstrings.TODAYS_CALENDER} component={TodaysCalenderStack}/>
        </Stack.Navigator>
    );
};

export default HomeStack;