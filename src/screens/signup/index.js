//import liraries
import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import CustomForm from '../../components/form';
import { AuthContext } from '../../navigation/AuthProvider';
import styles from './styles';
import navigationstrings from '../../constants/navigationstrings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// create a component
const Signup = ({navigation}) => {
    const { signup, user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const pressingButton = async (email, password) => {
        if(user==null){
            setLoading(true);
            try{
                await signup(email, password);
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
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                {
                    loading
                    ?
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <ActivityIndicator size="large"/>
                    </View>
                    :
                    <>
                        <CustomForm heading="Signup" onPressButton={(email, password) => pressingButton(email, password)}/> 
                        <View style={styles.currentScreenView}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate(navigationstrings.LOGIN)}>
                                <Text style={{fontSize: 15}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
                
            </View>
        </KeyboardAwareScrollView>
        
    );
};

//make this component available to the app
export default Signup;
