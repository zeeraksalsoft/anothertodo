import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import navigationstrings from '../../constants/navigationstrings';
import { ProgressChart, LineChart } from "react-native-chart-kit";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from '../../constants/colors';
import ScreenFormat from '../../components/screenFormat';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { ProgressCircle } from 'react-native-svg-charts'
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';

const TodaysList = ({navigation}) => {

  const [completedcount, setCompletedCount] = useState(0);
  const [notCompletedcount, setNotCompletedcount] = useState(0);
  const screenWidth = Dimensions.get("window").width;
  const currentUser = firebase.auth().currentUser;
  const [loading, setLoading] = useState(true);
  const [taskItems, setTaskItems] = useState([]);
  const [taskItemWeek, setTaskItemsWeek] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [lineData, setLineData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [0,0,0,0,0,0,0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  })
  const [progressData, setProgressData] = useState({
    labels: ["complete", "not complete"],
    data: [0,1]
  });

  useFocusEffect(useCallback(() =>  {
    fetchData();
    if (loading){
      setLoading(!loading);
    }
    
  }, []));

  const fetchData = async () => {
    try{
      const temp= [];
      const tempweek = [];
      var countUnDone = [0,0,0,0,0,0,0];
      var tempCompleteCount = 0;
      var tempIncompleteCount = 0;
      await firestore()
      .collection(currentUser.uid)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          const data = doc.data()
          data.id = doc.id
          //IF TASK IS IN CURRENT WEEK
          if(moment(data.startTime).week() == moment().week()){
            if(data.isDone == false){
              tempweek.push(data);
              countUnDone[moment(data.startTime).day()-1] = countUnDone[moment(data.startTime).day()-1] + 1;
            }
          }
          //IF TASK IS TIDAYS TASK
          if(moment(data.startTime).toDate().getDate() == currentDate.getDate() && moment(data.startTime).toDate().getMonth() == currentDate.getMonth() && moment(data.startTime).toDate().getFullYear() == currentDate.getFullYear()){
            temp.push(data)
            if(data.isDone){
              tempCompleteCount = tempCompleteCount + 1;
            }
            else{
              tempIncompleteCount = tempIncompleteCount + 1;
            }
          }
        })
        setTaskItems(temp);
        setTaskItemsWeek(tempweek);
        setCompletedCount(tempCompleteCount);
        setNotCompletedcount(tempIncompleteCount);
        if(temp.length==0){
          setProgressData({...progressData,data: [0, 0]});
        }
        else{
          setProgressData({...progressData,data: [Number(tempCompleteCount/temp.length), Number(tempIncompleteCount/temp.length)]});
        }
        
        setLineData(
          {
            ...lineData,
            datasets: [{
              data: [...countUnDone],
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
              strokeWidth: 2
            }]
          }
        )
      })
      .catch(err => console.log(err))
    } catch(e){
      console.log("Caught error within useEffect", e);
    }   
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

  const updateTask = async (docId, checkbox, index) => {
    
    const tempTask = [...taskItems];
    const tempweek = [...taskItemWeek];
    var tempCompleteCount = 0;
    var tempIncompleteCount = 0;
    var countUnDone = [0,0,0,0,0,0,0];
    
    tempTask[index].isDone = !checkbox;
    setTaskItems(tempTask);

    for(var i=0 ; i<taskItems.length; i++){
      if(taskItems[i].isDone){
        tempCompleteCount = tempCompleteCount + 1;
      }
    }
    for(var i=0;i<tempweek.length;i++){
      if(moment(taskItemWeek[i].startTime).week() == moment().week()){
        if(taskItemWeek[i].isDone==false){
          countUnDone[moment(taskItemWeek[i].startTime).day()-1] = countUnDone[moment(taskItemWeek[i].startTime).day()-1] + 1;
        }
      }
    }

    tempIncompleteCount = taskItems.length - tempCompleteCount;
    
    setCompletedCount(tempCompleteCount);
    setNotCompletedcount(tempIncompleteCount);
    setProgressData({...progressData,data: [Number(tempCompleteCount/taskItems.length), Number(tempIncompleteCount/taskItems.length)]});
    setLineData(
      {
        ...lineData,
        datasets: [{
          data: countUnDone,
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2
        }]
      }
    );

    try {
        await firestore()
        .collection(currentUser.uid)
        .doc(docId)
        .update({
            isDone: !checkbox
        })
        .then(() => {
          console.log("progress chart data before setting state: ",progressData);
          console.log("line chart data after setting state: ", lineData);
          console.log("line chart data array after setting state: ", lineData.datasets[0].data);
          console.log('Task state updated!');
        });
    } catch(e){
        console.log(e);
    }
  }

  return (
    <ScreenFormat heading="Today's List">
      <ScrollView style={styles.baseViewStyle}>
        <LineChart
          data={lineData}
          width={screenWidth} // from react-native
          height={180}
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLabels={false}
          chartConfig={styles.chartConfig}
          bezier
          style={{
              paddingRight: 50,
              marginBottom: 15
          }}
        />
        
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          {
            loading
            ?
            <View style={{padding: 30, alignItems: 'center', justifyContent: 'center'}}>
              <Text>
                Loading...
              </Text>
            </View>
            :
            // <ProgressCircle style={{ height: 200 }} progress={0.7} progressColor={'rgb(134, 65, 244)'} />
            <ProgressChart
              data={progressData}
              width={screenWidth}
              height={130}
              hideLegend={false}
              strokeWidth={10}
              radius={30}
              chartConfig={{
                  backgroundColor: '#E7EBF5',
                  backgroundGradientFrom: '#E7EBF5',
                  backgroundGradientTo: '#E7EBF5',
                  color: (opacity = 0.5) => `rgba(110, 0, 150, ${opacity})`,
              }}
              style= {{
                  borderRadius: 15,
              }}
          />
          }
        </View>
        <View style={styles.listViewStyle}>
          {
            taskItems.map((object, index) => {
              // console.log("isDone: ", object.id ,object.isDone);
              return (
                <BouncyCheckbox
                  key={object.id}
                  size={25}
                  fillColor="#B4C7B3"
                  unfillColor="#E7EBF5"
                  text={object.title}
                  isChecked={object.isDone}
                  // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                  onPress={() => updateTask(object.id, object.isDone, index)}
                  style={styles.bouncyListStyles}
                  textStyle={styles.listTextStyle}
                />
              )
            })
          }
        </View>
      </ScrollView>
      <View style={{marginTop: 5, marginBottom: 8, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate(navigationstrings.CREATE_TASK)}>
              <View style={styles.addButtonStyle}>
                  <Text style={{color: '#1C39D4'}}>Add Subtrack</Text>
              </View>
          </TouchableOpacity>
      </View>
    </ScreenFormat>
  );
};

export default TodaysList;