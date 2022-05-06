import React from 'react';
import { FlatList, View } from 'react-native';
import imagePath from '../../constants/imagePath';
import UserCard from '../../components/userCard';
import ScreenFormat from '../../components/screenFormat';
import {TouchableOpacity} from 'react-native'; 
import navigationstrings from '../../constants/navigationstrings';


const TodaysCalender = ({navigation}) => {
    
    const data = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          name: "Person Name",
          title: "What do I have to do",
          time: "9:00am - 11:00am"
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          name: "Person Name",
          title: "What do I have to do",
          time: "9:00am - 11:00am"
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          name: "Person Name",
          title: "What do I have to do",
          time: "9:00am - 11:00am"
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d73",
            name: "Person Name",
            title: "What do I have to do",
            time: "9:00am - 11:00am"
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d74",
            name: "Person Name",
            title: "What do I have to do",
            time: "9:00am - 11:00am"
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d75",
            name: "Person Name",
            title: "What do I have to do",
            time: "9:00am - 11:00am"
        },

    ];
    
    return (
        <ScreenFormat heading="Today's Calender" backButton={() => navigation.goBack()}> 
            <View style={{flex:1}}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id}
                    renderItem={(element) =>{
                        return(
                                <TouchableOpacity onPress={() => navigation.navigate(navigationstrings.EDIT_TASK)}>
                                    <UserCard title={data[0].title} name={data[0].name} time={data[0].time} image={imagePath.anime}/>
                                </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </ScreenFormat>
        // <View style={styles.baseContainer}>
        //     <View style={styles.backContainerStyle} >
        //         <TouchableOpacity onPress={() => navigation.navigate(navigationstrings.HOME)}>
        //             <Image style={styles.backImageStyle} source={imagePath.icBack}/>
        //         </TouchableOpacity>
        //         <Text style={styles.backTextStyle}>Back</Text>
        //     </View>
        //     <Text style={styles.headingTextStyle}>Today's Calender</Text>
        //     <View style={styles.childContainerStyle}>
        //         <Text style={styles.detailTextStyle}>Details</Text>
        //         <View style={{flex:1, alignItems: 'center'}}>
        //             <UserCard title='Go grocery shopping' name='Mark Twain' time='4:40pm - 6:00pm' image={imagePath.anime}/>
        //             <UserCard title='Eat food have fun' name='Lesly Baker' time='1:00pm - 2:00pm' image={require('D:/projects/anothertodo/src/assets/images/anime.jpg')}/>
        //         </View>
        //     </View>
        // </View>
    );
};

export default TodaysCalender;
