import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    cardContainerStyle: {
        opacity: 0.8,
        width: '45%',
        height: 150,
        borderRadius: 30,
        backgroundColor: '#53AF90',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    interiorContainerStyle: {
        width: '100%',
        height: '50%',
        // backgroundColor: '#23AF90',
        
    },
    textStyle: {
        fontSize: 13,
        
        fontWeight: '600',
        elevation: 2,
        color: 'white'
    },
    bottomBarStyle: {
        backgroundColor: '#23AF90',
        width: '100%',
        height: '30%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems:'center',
        justifyContent: 'center'
    }
});

export default styles;