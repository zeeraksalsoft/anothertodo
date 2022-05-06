//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EditTaskComponent from '../../components/editTaskComponent';

const EditTask = ({navigation}) => {
    return (
        <EditTaskComponent onCancel={() => navigation.goBack()}/>
    );
};

export default EditTask;
