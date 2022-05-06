import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    cardContainerStyle: {
        opacity: 0.8,
        flex:1,
        width: '100%',
        height: '25%',
        borderRadius: 30,
        backgroundColor: '#53AF90',
        elevation: 5,
        marginBottom: 10,
        justifyContent: 'flex-start'
    },
    taskTextStyle: {
        fontSize: 20,
        fontWeight: '800',
        elevation: 2,
        color: 'white'
    },
    nameTextStyle: {
        color: 'white',
        opacity: 0.7,
        fontSize: 12,
        fontWeight: 'bold'
    },
    timeTextStyle: {
        color: 'white',
        opacity: 0.7,
        fontSize: 12,
        fontWeight: 'bold'
    },
    rowViewStyle: {
        flexDirection: 'row',
        marginLeft: 10,
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20
        // flex: 1,
        // justifyContent: 'center'
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 60
    },
});

export default styles;