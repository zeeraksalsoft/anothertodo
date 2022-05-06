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
        borderTopRightRadius: 50
    },
    detailTextStyle:{
        fontSize: 20,
        color: '#00003B',
        fontWeight: 'bold',
        letterSpacing: -1,
        marginTop: 30,
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
    chartConfig: {
        backgroundColor: "#E7EBF5",
        backgroundGradientFrom: "#E7EBF5",
        backgroundGradientTo: "#E7EBF5",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(110, 0, 150, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16,
            fontSize: 8
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    },
    listViewStyle: {
        flex: 1,
        marginHorizontal: 20
    },
    bouncyListStyles: {
        padding: 20,
    },
    listTextStyle: {
        color: 'black',
        fontSize: 15,
        fontWeight: '300'
    },
    addButtonStyle: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A8B4D6',
        elevation: 1,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 80
    },
    buttonTextStyle: {},
    baseViewStyle: {
        
    },
});

export default styles;