import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from 'react';
import MainNavigator from './MainStack';
import AuthNavigator from './AuthStack';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';

const Routes = () => {
    const [initializing, setInitializing] = useState(true);
    const {user, setUser} = useContext(AuthContext);

    const onAuthStateChanged = (user) => {
        setUser(user);
        // console.log(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    
    return(
        <NavigationContainer>
            {user ? <MainNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}

export default Routes;