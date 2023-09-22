import { StyleSheet } from "react-native";
import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignSelf: 'center'
    },
    pollCont: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: pixelSizeVertical(10)
    },
    progressBar: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    progress: {
        height: 30,
        marginRight: 10,
        borderRadius: 5,
    },
    percentageTxt: {
        fontFamily: 'Montserrat-Medium'
    },
    questionTxt: {
        fontFamily: 'Montserrat-SemiBold'
    },
    optionTxt: {
        fontFamily: 'Montserrat-Medium',
        color: Colors.green,
        height: heightPixel(28),
    },
    voteCont: {
        flexDirection: 'row',
        marginTop: pixelSizeVertical(10)
    },
    prgCont: {
        flexDirection: 'row'
    },
    selectedIcon: {
        position: 'absolute',
        height: heightPixel(27)
    },
    voteTxt: {
        fontFamily: 'Montserrat-Medium'
    },
    progressCont: {
        width: widthPixel(300),
        justifyContent: "center",
    }
});

export { styles }