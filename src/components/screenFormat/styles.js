import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        backgroundColor: '#00003B',
    },
    headingTextStyle:{
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 20
    },
    childContainerStyle: {
        width: '100%',
        flex: 1,
        backgroundColor: '#E7EBF5',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    detailTextStyle:{
        fontSize: 20,
        color: '#00003B',
        fontWeight: 'bold',
        letterSpacing: -1,
        marginTop: 30,
        marginBottom: 15,
        paddingHorizontal: 20,
    },
    backContainerStyle: {
        marginHorizontal: 10,
        marginVertical: 15,
        flexDirection: 'row'
    },
    backImageStyle:{
        tintColor: 'white',
    },
    backTextStyle:{
        color: 'white',
        fontSize: 15,
        marginLeft: 5
    },
    lastViewStyle: {
        flex: 1,
        alignItems: 'center'
    }
});

export default styles;