import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';
import styles from './styles';


const Account = () => {
    const { logout,user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);




    const pressingButton = async () => {
        setLoading(true);
        await logout(email, password);
        if(user==null){
            setLoading(false);
        }
    }
        
    return (
        <View style={styles.container}>
            {
                loading?
                <ActivityIndicator size="large"/>
                :
                <TouchableOpacity style={styles.button} onPress={() => pressingButton()}>
                    <Text style={styles.text}>Log out</Text>
                </TouchableOpacity>
            }
        </View>
    );
};

export default Account;
