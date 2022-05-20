//import liraries
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import CustomForm from '../../components/form';
import styles from './styles';
import navigationstrings from '../../constants/navigationstrings';
import { AuthContext } from '../../navigation/AuthProvider';
import { Create } from '../../firebase/crud';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { loadPartialConfig } from '@babel/core';

// create a component
const Login = ({ navigation }) => {
    const { login, user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const pressingButton = async (email, password) => {
        setLoading(true);
        await login(email, password);
        if(!user){
            setLoading(false);
        }
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                {
                    loading?
                    <ActivityIndicator size="large"/>
                    :
                    <View>
                        <CustomForm heading="Login" forgot="Forgot password?" onPressButton={(email, passwrod) => pressingButton(email, passwrod)}/>
                        <View style={styles.currentScreenView}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate(navigationstrings.SIGNUP)}>
                                <Text style={{fontSize: 15}}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        </KeyboardAwareScrollView>
    );
};


export default Login;
