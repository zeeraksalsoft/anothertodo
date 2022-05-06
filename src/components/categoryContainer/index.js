import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const CategoryCard = (props) => {
    return (
        <View style={{...styles.cardContainerStyle, ...props.newstyle}}>
            <View style={{...styles.bottomBarStyle, ...props.newstyle}}>
                <Text style={styles.textStyle}>{props.title}</Text>
            </View>
        </View>
    );
};

export default CategoryCard;