import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { Formik } from 'formik';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditTaskComponent = (props) => {

    const [startDate, setStartDate] = useState(new Date().toLocaleString('en-us',{ month: 'short' }));
    const [endDate, setEndDate] = useState(new Date().toLocaleString('en-us',{ month: 'short' }));
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
    const [mode, setMode] = useState('date');
    // const [user, setUser] = useState(null);
    // const currentUser = firebase.auth().currentUser;

    const showStartDatePicker = () => {
        setStartDatePickerVisibility(true);
    };
    
    const hideStartDatePicker = () => {
        setStartDatePickerVisibility(false);
    };
    
    const showEndDatePicker = () => {
        setEndDatePickerVisibility(true);
    };
    
    const hideEndDatePicker = () => {
        setEndDatePickerVisibility(false);
    };

    const handleConfirmStartDate = (selectedDate) => {
        // const dt = DateTime(selectedDate)
        // selectedDate = selectedDate.toString();
        // moments
        console.log(selectedDate);
        console.log(typeof(selectedDate));
        setStartDate(selectedDate);
        console.log("start Date after state update: ", startDate);
        hideStartDatePicker();
    };

    const handleConfirmEndDate = (selectedDate) => {
        // console.warn("A end date has been picked: ", date);
        // console.log("End Date: ",moment(selectedDate).isAfter(startDate));
        if(moment(selectedDate).isAfter(startDate)){
            setEndDate(selectedDate);
            hideEndDatePicker();
        } else{
            Alert.alert(
                "Invalid end date",
                "Please enter correct end date",
                [{text: "Ok"}],
                {cancellable: true}
            )   
        }
        // selectedDate = selectedDate.toString();
        
    };

    const onCancelButton = () => {
        if(props.onCancel){
            props.onCancel();
        }
    }

    const onDoneButton = (title, person, startTime, endTime, color, repeat, addTag, attachFile, notes) => {
        if(props.onDone){
            if(title != ""){
                props.onDone(title, person, startTime.toString(), endTime.toString(), color, repeat, addTag, attachFile, notes);
                props.onCancel();
            } else {
                Alert.alert(
                    "No title",
                    "Please enter title",
                    [{text: "Ok"}],
                    {cancellable: true}
                )
            }
        }
        else if(props.onUpdateValue){
            // console.log("in onUpdateValue mehtod: ", props.onUpdateValue)
            props.onUpdateValue(title, person, startTime.toString(), endTime.toString(), color, repeat, addTag, attachFile, notes);
            props.onCancel();
        }
    }
    console.log("initial values: ",props.initialValue);
    // console.log(initialValues.person)
    // console.log(initialValues.notes)
    return (
        <KeyboardAwareScrollView style={styles.baseContainer}>
            <View>
                <Formik
                    initialValues={
                    props.initialValue
                    ?
                    {
                        title: props.initialValue.title,
                        person: props.initialValue.person,
                        start: props.initialValue.startTime,
                        end: props.initialValue.endTime,
                        color: props.initialValue.color,
                        repeat: props.initialValue.repeat,
                        addTag: props.initialValue.addTag,
                        attachFile: props.initialValue.attachFile,
                        notes: props.initialValue.notes
                    }
                    :
                    {
                        title: '',
                        person: '',
                        start: startDate,
                        end: endDate,
                        color: 'blue',
                        repeat: false,
                        addTag: null,
                        attachFile: null,
                        notes: ''
                    }
                }
                    onSubmit={(values) => {
                        console.log("start date in formik onSubmit: ",startDate)
                        console.log("end Date formik onsubmit: ", endDate)
                        onDoneButton(values.title, values.person, startDate, endDate, values.color, values.repeat, values.addTag, values.attachFile, values.notes);
                    }}
                >
                    {(formikprops) => (
                        <View style={styles.formViewStyle}>
                            <View style={styles.headerViewStyle}>
                                <TouchableOpacity onPress={onCancelButton}>
                                    <Text style={styles.cancelTextStyle}>Cancel</Text>
                                </TouchableOpacity>
                                <Text style={styles.headerTextStyle}>New Task</Text>
                                <TouchableOpacity onPress={formikprops.handleSubmit}>
                                    <Text>Done</Text>
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                style={styles.titleInputStyle}
                                placeholder='Title'
                                onChangeText={formikprops.handleChange('title')}
                                value={formikprops.values.title}
                            />
                            <TextInput
                                style={styles.titleInputStyle}
                                placeholder='Person'
                                onChangeText={formikprops.handleChange('person')}
                                value={formikprops.values.person}
                            />
                            <View style={styles.timeSelectorViewStyle}>
                                <View>
                                    <Text>Start</Text>
                                    <TouchableOpacity onPress={showStartDatePicker}>
                                        <View style={styles.timeContainerStyle}>
                                            <Text style={styles.timeTextStyle}>{startDate.toLocaleString('en-us',{ month: 'short', dateStyle: 'short' })}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <DateTimePickerModal
                                        onConfirm={handleConfirmStartDate}
                                        onCancel={hideStartDatePicker}
                                        isVisible={isStartDatePickerVisible}
                                        mode="datetime"
                                        // value={formikprops.values.start}
                                    />
                                </View>
                                {/* <View>
                                    <Text>Duration</Text>
                                    <View style={styles.timeContainerStyle}>
                                        <Text style={styles.timeTextStyle}>a</Text>
                                    </View>
                                </View> */}
                                <View>
                                    <Text>End</Text>
                                    <TouchableOpacity onPress={showEndDatePicker}>
                                        <View style={styles.timeContainerStyle}>
                                            <Text style={styles.timeTextStyle}>{endDate.toLocaleString('en-us',{ month: 'short', dateStyle: 'short' })}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <DateTimePickerModal
                                        onConfirm={handleConfirmEndDate}
                                        onCancel={hideEndDatePicker}
                                        isVisible={isEndDatePickerVisible}
                                        mode="datetime"
                                        // value={formikprops.values.end}
                                    />
                                </View>
                            </View>
                            <View style={styles.optionsSubView}>
                                <View style={styles.optionsView}>
                                    {/* <View>
                                        <View style={styles.colorComponentStyle}>
                                            <View style={styles.colorContainerStyle}></View>
                                            <TouchableOpacity>
                                                <Text>Blue</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.sepratorStyle}></View> */}
                                    <View style={styles.eachOptionView}>
                                        <TouchableOpacity>
                                            <Text>Repeat</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.sepratorStyle}></View>
                                    <View style={styles.eachOptionView}>
                                        <TouchableOpacity>
                                            <Text>Add tag</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.sepratorStyle}></View>
                                    <View style={styles.eachOptionView}>
                                        <TouchableOpacity>
                                            <Text>Attach file</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.notesFormViewStyle}>
                                <TextInput
                                    multiline
                                    style={styles.notesInputStyle}
                                    placeholder='Notes'
                                    onChangeText={formikprops.handleChange('notes')}
                                    value={formikprops.values.notes}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default EditTaskComponent;
