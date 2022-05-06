import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';
import styles from './styles';


const Account = () => {
    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => logout()}>
                <Text style={styles.text}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Account;
