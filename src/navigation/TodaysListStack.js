import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationstrings from '../constants/navigationstrings';
import { CreateTask, TodaysList } from '../screens';

const Stack = createStackNavigator();

const TodaysListStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={navigationstrings.TODAYS_LIST} component={TodaysList}/>
            <Stack.Screen name={navigationstrings.CREATE_TASK} component={CreateTask}/>
        </Stack.Navigator>
    );
};

export default TodaysListStack;