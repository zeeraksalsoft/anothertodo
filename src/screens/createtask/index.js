import React, {useContext, useState} from 'react';
import EditTaskComponent from '../../components/editTaskComponent';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../navigation/AuthProvider';
import { firebase } from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const addTaskToDatabase = async (title, person, startTime, endTime, color, repeat, addTag, attachFile, notes) => {

    const currentUser = firebase.auth().currentUser;
    await firestore()
    .collection(currentUser.uid)
    .add({
        title: title,
        person: person,
        startTime: startTime,
        endTime: endTime,
        color: color,
        repeat: repeat,
        addTag: addTag,
        attachFile: attachFile,
        notes: notes,
        addedTime: Date(),
        isDone: false,
    })
    .then(() => {
        console.log('post added');
        navigation.goBack();
        Alert.alert(
            'Task Added!'
        )
    })
    .catch((error) => {
        console.log(error);
    })
}   

const CreateTask = ({ navigation }) => {

    return (
        <EditTaskComponent
            onDone={
                (title, person, startTime, endTime, color, repeat, addTag, attachFile, notes) => addTaskToDatabase(
                    title,
                    person,
                    startTime,
                    endTime,
                    color,
                    repeat,
                    addTag,
                    attachFile,
                    notes
                )
            }
            onCancel={
                () => navigation.goBack()
            }
        />
    );
};

export default CreateTask;
