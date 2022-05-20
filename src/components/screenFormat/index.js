import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import imagePath from '../../constants/imagePath';

const ScreenFormat = ({ backButton, heading, children }) => {
    const onPressBackButton = () => {
        if(backButton){
            backButton();
        }
    }
    
    return (
        <View style={styles.baseContainer}>
            {
                backButton ? 
                <View style={styles.backContainerStyle} >
                    <TouchableOpacity onPress={onPressBackButton}>
                        <Image style={styles.backImageStyle} source={imagePath.icBack}/>
                    </TouchableOpacity>
                    <Text style={styles.backTextStyle}>Back</Text>
                </View>
                : null
            }
            <Text style={styles.headingTextStyle}>{heading}</Text>
            <View style={styles.childContainerStyle}>
                <Text style={styles.detailTextStyle}>Details</Text>
                <View style={styles.lastViewStyle}>
                    {children}
                </View>
            </View>
        </View>
    );
};

export default ScreenFormat;