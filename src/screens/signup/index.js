//import liraries
import React, {useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomForm from '../../components/form';
import { AuthContext } from '../../navigation/AuthProvider';
import styles from './styles';
import navigationstrings from '../../constants/navigationstrings';

// create a component
const Signup = ({navigation}) => {
    const { signup } = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <CustomForm heading="Signup" onPressButton={(email, password) => {signup(email, password)}}/>
            <View style={styles.currentScreenView}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationstrings.LOGIN)}>
                    <Text style={{fontSize: 15}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

//make this component available to the app
export default Signup;
