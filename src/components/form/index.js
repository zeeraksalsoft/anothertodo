//import liraries
import React from 'react';
import { View, Text, TextInput, Pressable, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import styles from './styles';

const CustomForm = (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.bottomSectionStyle}>
                <Text style={styles.headingText}>{props.heading}</Text>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        props.onPressButton(values.email, values.password);
                    }}
                >
                    {(formikprops) => (
                        <View style={styles.formViewStyle}>
                        <Text style={styles.inputTextStyle}>Email</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Enter email'
                            onChangeText={formikprops.handleChange('email')}
                            value={formikprops.values.email}
                        />
                        <View style={{height: 10, width: 10}}></View>
                        <Text style={styles.inputTextStyle}>Password</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Enter password'
                            onChangeText={formikprops.handleChange('password')}
                            value={formikprops.values.password}
                            secureTextEntry={true}
                        />
                        <View style={styles.forgotPassStyle}></View>
                        {props.forgot!=null? <TouchableOpacity>
                            <Text style={styles.forgotPassTextStyle}>{props.forgot}</Text>
                        </TouchableOpacity>:null}
                        <View style={{height: 20, width: 10}}></View>
                        <View style={styles.buttonPlacement}>
                            <Pressable style={styles.buttonStyle} onPress={formikprops.handleSubmit}>
                                <Text style={styles.buttonTextStyle}>{props.heading}</Text>
                            </Pressable>
                        </View>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    )
}

export default CustomForm;
