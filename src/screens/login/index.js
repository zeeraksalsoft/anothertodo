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
    const { login } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const pressingButton = async (email, password) => {
        if(user==null){
            setLoading(true);
            try{
                await login(email, password);
                if(user!=null){
                    setLoading(false);
                }
            } catch(e) {
                console.log("Login caught error: ", e)
                setLoading(false);
                Alert.alert(
                    "In valid credentials",
                    "Please enter correct email and password",
                    [{text: "Ok"}],
                    {cancellable: true}
                )
            }
        }
    }

    return (
        <KeyboardAwareScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {
                    loading?
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <ActivityIndicator size="large"/>
                    </View> 
                    :
                    <View style={styles.container}>
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
