//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomForm from '../../components/form';
import styles from './styles';
import navigationstrings from '../../constants/navigationstrings';
import { AuthContext } from '../../navigation/AuthProvider';
import { Create } from '../../firebase/crud';

// create a component
const Login = ({ navigation }) => {
    const {login} = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <CustomForm heading="Login" forgot="Forgot password?" onPressButton={(email, password) => {login(email, password)}}/>
            <View style={styles.currentScreenView}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationstrings.SIGNUP)}>
                    <Text style={{fontSize: 15}}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default Login;
