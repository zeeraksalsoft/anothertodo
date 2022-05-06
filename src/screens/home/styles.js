import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#E7EBF5'
    },
    headerTextStyle: {
        fontSize: 30,
        paddingBottom: 20,
        fontWeight: '700',
        color: '#00003B',
        letterSpacing: -1,
        marginLeft: 10
    },
    rowViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    parentButtonViewStyles:{
        width: '80%',
        height: '7%',
        borderWidth: 1,
        borderColor: '#B4C7B3',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        borderStyle: 'dashed',
    },
    viewAllViewStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    viewAllTextStyle: {
        color: colors.PURPLE,
        elevation: 2,
        fontWeight: '500',
        letterSpacing: -0.5
    },
    listHeadingText: {
        marginHorizontal: 10,
        fontSize: 12,
        color: colors.BLACK,
        fontWeight: '500',
        letterSpacing: -0.5
    },
    listViewStyle: {
        flex: 1,
        // marginHorizontal: 20
    },
    bouncyListStyles: {
        padding: 20,
    },
    listTextStyle: {
        color: 'black',
        fontSize: 15,
        fontWeight: '300'
    }
});

// const styles = StyleSheet.create({
//     baseContainer: {
//         flex: 1,
//         backgroundColor: '#00003B',
//     },
//     headingTextStyle:{
//         fontSize: 30,
//         fontWeight: '700',
//         color: 'white',
//         marginTop: 20,
//         marginLeft: 30,
//         marginBottom: 20
//     },
//     childContainerStyle: {
//         width: '100%',
//         flex: 1,
//         backgroundColor: 'white',
//         borderTopLeftRadius: 50,
//         borderTopRightRadius: 50
//     },
//     detailTextStyle:{
//         fontSize: 20,
//         color: '#00003B',
//         fontWeight: 'bold',
//         letterSpacing: -1,
//         marginTop: 30,
//         paddingHorizontal: 20,
//     },
//     backContainerStyle: {
//         marginHorizontal: 10,
//         marginVertical: 15,
//         flexDirection: 'row'
//     },
//     backImageStyle:{
//         tintColor: 'white',
//     },
//     backTextStyle:{
//         color: 'white',
//         fontSize: 15,
//         marginLeft: 5
//     }
// });

export default styles;