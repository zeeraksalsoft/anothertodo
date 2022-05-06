import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import imagePath from '../../constants/imagePath';


const UserCard = (props) => {
    const findHeinght = (time) => {
        
    } 
    
    return (
        <View style={styles.cardContainerStyle}>
            <View style={styles.rowViewStyle}>
                <Image style={styles.imageStyle} source={props.image}/>
                <View style={{marginLeft: 10}}>
                    <Text style={styles.nameTextStyle}>{props.name? props.name: null}</Text>
                    <Text style={styles.taskTextStyle}>{props.title}</Text>
                    <Text style={styles.timeTextStyle}>{props.time}</Text>
                </View>
            </View>
            
        </View>
    );
};

export default UserCard;
