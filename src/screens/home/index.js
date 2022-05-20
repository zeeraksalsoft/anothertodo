// import React from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import imagePath from '../../constants/imagePath';
// import styles from './styles';
// import navigationstrings from '../../constants/navigationstrings';

import React, {useEffect, useState, useCallback} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import CategoryCard from '../../components/categoryContainer';
import styles from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import navigationstrings from '../../constants/navigationstrings';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';

const Home = ({navigation}) => {
  const currentUser = firebase.auth().currentUser;
  const [taskItems, setTaskItems] = useState([]);
  const [urgentTaskItems, setUrgentTaskItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkboxState, setCheckboxState] = React.useState(false);
  const currentDate = new Date();
  

  useFocusEffect(useCallback(() => {
    fetchPosts();
    if(loading){
      setLoading(false);
    }
    setInterval(fetchPosts, 1000 * 60 * 60);
  },[]));


  const fetchPosts = async () => {
    try{
      const temp = [];
      const urgentTemp = [];
      await firestore()
      .collection(currentUser.uid)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          const data = doc.data();
          data.id = doc.id;
          temp.push(data);
          console.log(moment.duration(moment(currentDate).diff(moment(data.startTime))).asHours());
          if(moment.duration(moment(data.startTime).diff(moment(currentDate))).asHours() <= 4 && moment.duration(moment(data.startTime).diff(moment(currentDate))).asHours()>0 && data.isDone==false){
            urgentTemp.push(data);
          }
        })
      })
      setTaskItems(temp);
      setUrgentTaskItems(urgentTemp);
    } catch(e){
      console.log("FetchPost() caught error: ", e);
    }
  }


  // useEffect(() => {
    





  //   const fetchPosts = async () => {
  //     const temp = [];
  //     const urgetTemp = [];
  //     try{
  //       //REVISIT THIS checkDate LINE
        
  //       await firestore()
  //       .collection(currentUser.uid)
  //       .get()
  //       .then((querySnapshot) => {
  //         // console.log(querySnapshot);
  //         querySnapshot.forEach(doc => {
  //           const {title, person, startTime, endTime, color, repeat, addTag, attachFile, notes, isDone} = doc.data();
  //           temp.push({
  //             id: doc.id,
  //             title: title,
  //             person: person,
  //             startTime: startTime,
  //             endTime: endTime,
  //             color: color,
  //             repeat: repeat,
  //             addTag: addTag,
  //             attachFile: attachFile,
  //             notes: notes,
  //             isDone: isDone
  //           });
  //           if(moment(startTime).date() == moment(currentDate).date() && moment(startTime).month() == moment(currentDate).month() && moment(startTime).year() == moment(currentDate).year() && moment(startTime).hour() + 3 >= moment(currentDate).hour() ){
  //             urgetTemp.push({
  //               id: doc.id,
  //               title: title,
  //               person: person,
  //               startTime: startTime,
  //               endTime: endTime,
  //               color: color,
  //               repeat: repeat,
  //               addTag: addTag,
  //               attachFile: attachFile,
  //               notes: notes,
  //               isDone: isDone
  //             });
  //           }
  //         })
  //       });
        
  //       setUrgentTaskItems(urgetTemp);
  //       setTaskItems(temp);
  //       if(loading){
  //         setLoading(false);
  //       }
  //     } catch(e){
  //       console.log("Catching errorr: ",e);
  //     }
  //   }
  //   fetchPosts();
  // },[taskItems]);

  const updateTask = async (docId, checkboxState) => {
    console.log(docId);
    try {
        await firestore()
        .collection(currentUser.uid)
        .doc(docId)
        .update({
            isDone: checkboxState
        })
        .then(() => {
            console.log('Task state updated!');
        });
    } catch(e){
        console.log(e);
    }
  }

  const updateTaskStatus = (id,checkboxState) => {
    setCheckboxState(!checkboxState);
    updateTask(id,!checkboxState);
  }

  const ItemDivider = () => {
    return (
      <View
        style={{
            marginHorizontal: 30,
            height: 1,
            width: "80%",
            backgroundColor: "#607D8B",
            opacity: 0.2
        }}
      />
    );
  }

  const navigateToTodaysCalender = (taskItem) => {
    console.log(taskItem);
    navigation.navigate(navigationstrings.TODAYS_CALENDER_STACK,{
      screen: navigationstrings.TODAYS_CALENDER,
      params: {taskItem}
    })
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextStyle}>My To Do</Text>
      <TouchableOpacity style={styles.parentButtonViewStyles}>
        <Text>Add Category</Text>
      </TouchableOpacity>
      <View style={styles.rowViewStyle}>
        <CategoryCard title='Category 1' />
        <CategoryCard title='Category 2' newstyle={{backgroundColor: '#F06E65'}}/>
      </View>
      <View style={styles.rowViewStyle}>
        <CategoryCard title='Category 3' newstyle={{backgroundColor: '#4CC8CC'}}/>
        <CategoryCard title='Category 4' newstyle={{backgroundColor: '#F0DC4D'}}/>
      </View>
      <View style={{height: 12}}/>
      <View style={styles.viewAllViewStyle}>
        <Text style={styles.listHeadingText}>TODAY</Text>
        <TouchableOpacity onPress={()=>navigateToTodaysCalender(taskItems)}>
          <Text style={styles.viewAllTextStyle}>VIEW ALL</Text>
        </TouchableOpacity>
      </View>
      {
        (loading)
        ?
        <View>
          <Text>Loading...</Text>
        </View>
        :
        (urgentTaskItems.length < 1)
        ?
        <View style={{alignItems: 'center', justifyContent: 'center', padding: 30}}>
          <Text>No urgent tasks right now</Text>
        </View>
        :
        <View style={styles.listViewStyle}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={urgentTaskItems}
            ItemSeparatorComponent={ItemDivider}
            renderItem={(element) => {

              return(
                <BouncyCheckbox
                  fillColor="#B4C7B3"
                  unfillColor="#E7EBF5"
                  text={element.item.title}
                  isChecked={element.item.isDone}
                  onPress={() => updateTaskStatus(element.item.id,checkboxState)}
                  style={styles.bouncyListStyles}
                  size={20}
                  textStyle={styles.listTextStyle}
                />
              );
            }}    
          />
        </View>
      }
    </View>
  );
};

export default Home;
