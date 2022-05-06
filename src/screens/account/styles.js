import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    button: {
        backgroundColor: colors.LIGHTPURPLE,
        height: 40,
        width: 100,
        borderRadius: 15,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: colors.PURPLE,
        fontWeight: '700'
    }
});

export default styles;