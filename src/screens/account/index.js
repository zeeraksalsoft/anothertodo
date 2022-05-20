import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';
import styles from './styles';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Account = () => {
    const { logout } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);


    const pressingButton = async () => {
        if(user!=null){
            setLoading(true);
            try{
                await logout();
                if(user==null){
                    setLoading(false);
                }
            } catch(e){
                console.log("Cathc e: ",e);
                setLoading(false);
                Alert.alert(
                    "Error",
                    "There was a error while logging out",
                    [{text: "Ok"}],
                    {cancellable: true}
                )
            }
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
