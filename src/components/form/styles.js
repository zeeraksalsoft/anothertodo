import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5e8fc',
      paddingTop: 180
    },
    bottomSectionStyle: {
      flex: 1,
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
      paddingHorizontal: 40,
      paddingBottom: '10%',
      backgroundColor: 'white',
      width: '100%',
    },
    inputStyle: {
      paddingVertical: 15,
      width: 300,
      height: 50,
      borderColor: '#042602',
      borderBottomWidth: 1,
      marginBottom: 5,
    },
    formViewStyle: {
      padding: 10,
      justifyContent: 'center'
    },
    headingText: {
      marginTop: 30,
      fontFamily: 'Cochin',
      paddingBottom: 80,
      fontSize: 50,
      letterSpacing: -2,
    },
    inputTextStyle: {
      fontSize: 15,
      fontWeight: '500',
    },
    buttonStyle: {
      backgroundColor: '#042602',
      borderRadius: 30,
      width: 200,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2
    },
    buttonTextStyle:{
      color: 'white',
      fontWeight: 'bold',
      
    },
    buttonPlacement: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    forgotPassTextStyle: {
        fontSize: 12
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#E8EAED',
        borderWidth: 5,
        borderColor: '#E8EAED',
        paddingBottom: 20
    },
  });

export default styles;