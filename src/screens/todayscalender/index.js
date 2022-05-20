import React, {useState, useEffect} from 'react';
import { FlatList, View, Text } from 'react-native';
import imagePath from '../../constants/imagePath';
import UserCard from '../../components/userCard';
import ScreenFormat from '../../components/screenFormat';
import {TouchableOpacity} from 'react-native'; 
import navigationstrings from '../../constants/navigationstrings';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';


const TodaysCalender = (props) => {
    const currentUser = firebase.auth().currentUser;
    const [loading, setLoading] = useState(true);
    const [currentList, setCurrentList] = useState(props.route.params.taskItem);
    
    useEffect( async () => {
        const subscriber = await firestore()
            .collection(currentUser.uid)
            .onSnapshot(querySnapshot => {
            const today = [];
      
            querySnapshot.forEach(documentSnapshot => {
              today.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
      
            setCurrentList(currentList);
            setLoading(false);
          });
      
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);
    console.log("routes params: ", props.route.params.taskItem);
    return (
        <ScreenFormat heading="Today's Calender" backButton={() => props.navigation.goBack()}>
            {
                loading
                ?
                <View>
                    <Text>Loading...</Text>
                </View>
                :
                <View>
                    <FlatList
                        data={props.route.params.taskItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => item.id}
                        renderItem={(element) => {
                            return(
                                <TouchableOpacity onPress={() => props.navigation.navigate(navigationstrings.EDIT_TASK, {
                                        screen: navigationstrings.EDIT_TASK,
                                        params: element.item
                                    })}
                                >
                                    <UserCard title={element.item.title} name={element.item.person} startTime={element.item.startTime} endTime={element.item.endTime} image={imagePath.anime}/> 
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            }
        </ScreenFormat>
    );
};

export default TodaysCalender;
