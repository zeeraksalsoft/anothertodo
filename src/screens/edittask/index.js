//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EditTaskComponent from '../../components/editTaskComponent';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

const EditTask = ({navigation, route}) => {
    const currentUser = firebase.auth().currentUser;
    const updateTask = async (title, person, startTime, endTime, color, repeat, addTag, attachFile, notes) => {
        try {
            await firestore()
            .collection(currentUser.uid)
            .doc(route.params.params.id)
            .update({
                title: title,
                person: person,
                startTime: startTime,
                endTime: endTime,
                color: color,
                repeat: repeat,
                addTag: addTag,
                attachFile: attachFile,
                notes: notes,
            })
            .then(() => {   
                console.log('User updated!');
            });
        } catch(e){
            console.log(e);
        }
    }
    
    const initialValues = {
        title: route.params.params.title,
        person: route.params.params.person,
        startTime: route.params.params.startTime,
        endTime: route.params.params.endTime,
        color: route.params.params.color,
        repeat: route.params.params.repeat,
        addTag: route.params.params.addTag,
        attachFile: route.params.params.attachFile,
        notes: route.params.params.notes
    }

    return (
        <EditTaskComponent 
            onCancel={() => navigation.goBack()} 
            initialValue={initialValues}
            onUpdateValue={
                (title, person, startTime, endTime, color, repeat, addTag, attachFile, notes) => updateTask(
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
        />
    );
};

export default EditTask;
