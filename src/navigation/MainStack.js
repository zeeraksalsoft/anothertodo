import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationstrings from '../constants/navigationstrings';
import TabRoutes from './TabRoutes';

const MainStack = createStackNavigator();
const MainNavigator = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name={navigationstrings.TAB_ROUTES}
                component={TabRoutes}
                options={{headerShown: false}}
            />
        </MainStack.Navigator>
    )
}

export default MainNavigator;