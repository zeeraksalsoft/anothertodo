import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationstrings from '../constants/navigationstrings';
import { EditTask, TodaysCalender } from '../screens';

const Stack = createStackNavigator();

const TodaysCalenderStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={navigationstrings.TODAYS_CALENDER} component={TodaysCalender}/>
            <Stack.Screen name={navigationstrings.EDIT_TASK} component={EditTask}/>
        </Stack.Navigator>
    );
};

export default TodaysCalenderStack;
