import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { Formik } from 'formik';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AuthContext } from '../../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';

const EditTaskComponent = ({ onCancel, onDone }) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    // const [user, setUser] = useState(null);
    // const currentUser = firebase.auth().currentUser;

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirmStartDate = (date) => {
        console.warn("A start date has been picked: ", date);
        hideDatePicker();
    };

    const handleConfirmEndDate = (date) => {
        console.warn("A end date has been picked: ", date);
        hideDatePicker();
    };

    const onCancelButton = () => {
        if(onCancel){
            onCancel();
        }
    }

    const onDoneButton = (title, person, startTime, endTime, color, repeat, addTag, attachFile, notes) => {
        // console.log("on done button log: ", user.uid);
        // console.log(typeof( user.uid));
        if(onDone){
            onDone(title, person, startTime, endTime, color, repeat, addTag, attachFile, notes);
        }
    }

    return (
        <View style={styles.baseContainer}>
        
            
                <Formik
                    initialValues={{title: '', person: '', start: null, end: null, color: 'blue', repeat: false, addTag: null, attachFile: null, notes: ''}}
                    onSubmit={(values) => {
                        onDoneButton(values.title, values.person, values.start, values.end, values.color, values.repeat, values.addTag, values.attachFile, values.notes);
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
                                    <TouchableOpacity onPress={showDatePicker}>
                                        <View style={styles.timeContainerStyle}>
                                            <Text style={styles.timeTextStyle}>15 Jul, 14:00</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <DateTimePickerModal
                                        onConfirm={handleConfirmStartDate}
                                        onCancel={hideDatePicker}
                                        isVisible={isDatePickerVisible}
                                        mode="datetime"
                                    />
                                </View>
                                <View>
                                    <Text>Duration</Text>
                                    <View style={styles.timeContainerStyle}>
                                        <Text style={styles.timeTextStyle}>1 Hour</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text>End</Text>
                                    <TouchableOpacity onPress={showDatePicker}>
                                        <View style={styles.timeContainerStyle}>
                                            <Text style={styles.timeTextStyle}>15 Jul, 15:00</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <DateTimePickerModal
                                        onConfirm={handleConfirmEndDate}
                                        onCancel={hideDatePicker}
                                        isVisible={isDatePickerVisible}
                                        mode="datetime"
                                    />
                                </View>
                            </View>
                            <View style={styles.optionsSubView}>
                                <View style={styles.optionsView}>
                                    <View>
                                        <View style={styles.colorComponentStyle}>
                                            <View style={styles.colorContainerStyle}></View>
                                            <TouchableOpacity>
                                                <Text>Blue</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.sepratorStyle}></View>
                                    <View>
                                        <TouchableOpacity>
                                            <Text>Repeat</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.sepratorStyle}></View>
                                    <View>
                                        <TouchableOpacity>
                                            <Text>Add tag</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.sepratorStyle}></View>
                                    <View>
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
       
    );
};

export default EditTaskComponent;
