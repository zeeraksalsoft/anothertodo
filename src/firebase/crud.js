import firestore from '@react-native-firebase/firestore';


const addTaskToDatabase = async ({ uid, task, startTime, endTime, person, addedTime }) => {

    firestore()
    .collection(uid)
    .add({
        task: task,
        startTime: startTime,
        endTime: endTime,
        person: person,
        addedTime: addedTime
    })
    .then(() => {
        console.log('post added');
        Alert.alert(
            'Task Added!'
        )
    })
    .catch((error) => {
        console.log(error);
    })
}




