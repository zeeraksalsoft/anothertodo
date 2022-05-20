import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    baseContainer: {
        // flex:1,
        backgroundColor: colors.BASECOLOR,
        padding: 8
        // justifyContent: 'space-between'
    },
    subViewStyle: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flex: 0.8
    },
    headerViewStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingHorizontal: 5,
        borderRadius: 5
    },
    headerTextStyle: {
        fontSize: 15,
        fontWeight: '700',
        color: 'black'
    },
    cancelTextStyle: {
        color: '#cf3e3e'
    },
    formViewStyle:{
        flex:1,
        alignItems: 'stretch',
        // justifyContent: 'space-evenly',
        padding: 10,
    },
    // addTaskViewStyle: {
    //     marginBottom: 7,
    //     justifyContent: 'center',
    //     // backgroundColor: 'yellow'
    // },
    titleInputStyle: {
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#d1d1d1',
    },
    timeSelectorViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginBottom: 10,
        backgroundColor: 'white',
        padding: 7,
        marginTop: 5,
        borderRadius: 10,
    },
    timeContainerStyle: {
        backgroundColor: '#F8F8F8',
        opacity: 0.6,
        padding: 5,
        borderRadius: 6,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    timeTextStyle: {
        color: 'black',
        fontSize: 12,
        fontWeight: '500'
    },
    optionsView: {
        flex: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        // width: '100%',
        // justifyContent: 'space-evenly' ,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    optionsSubView:{
        // justifyContent: 'space-evenly',
        // flex: 1,
        width: '100%'
    },
    eachOptionView : {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 8,
        borderRadius: 10
    },
    notesFormViewStyle: {
        flex:1,
        padding: 10,
        backgroundColor: 'white',
        width: '100%',
        paddingBottom: '100%',
        borderRadius: 10,
    },
    notesInputStyle: {
        flex: 1
    },
    optionComponentViewStyle:{
        
    },
    sepratorStyle: {
        backgroundColor: '#d1d1d1',
        height: 1,
        width: '100%',
    },
    colorComponentStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    colorContainerStyle:{
        marginRight: 10,
        height: 20,
        width: 20,
        borderRadius: 60,
        backgroundColor: 'blue'
    },
});

export default styles;