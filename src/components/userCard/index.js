import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import moment from 'moment';


const UserCard = (props) => {
    const findHeight = (time) => {
        
    } 
    
    return (
        <View style={styles.cardContainerStyle}>
            <View style={styles.rowViewStyle}>
                <Image style={styles.imageStyle} source={props.image}/>
                <View style={{marginLeft: 10}}>
                    <Text style={styles.nameTextStyle}>{props.name? props.name: null}</Text>
                    <Text style={styles.taskTextStyle}>{props.title}</Text>
                    <Text style={styles.timeTextStyle}>{moment(props.startTime).format("ddd, MMM Do, h:mm a")} - {moment(props.endTime).format("ddd, MMM Do, h:mm a")}</Text>
                </View>
            </View>
            
        </View>
    );
};

export default UserCard;
