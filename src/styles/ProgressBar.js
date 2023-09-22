import { StyleSheet } from "react-native";
import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignSelf: 'center',
        backgroundColor: Colors.white,
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
        justifyContent: 'space-between',
    },

    progress: {
        height: 30,
        marginRight: 10,
        borderRadius: 5,
    },

    percentageCont: {
        justifyContent: "center",
    },

    percentageTxt: {
        fontFamily: 'Montserrat-Medium'
    },

    questionTxt: {
        fontFamily: 'Montserrat-SemiBold'
    },

    optionTxt: {
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.darkgreeen,
        height: heightPixel(28),
        paddingLeft: pixelSizeVertical(10)
    },

    voteCont: {
        flexDirection: 'row',
        marginTop: pixelSizeVertical(10)
    },

    prgCont: {
        flexDirection: 'row'
    },

    selectedIcon: {
        height: heightPixel(27),
    },

    voteTxt: {
        fontFamily: 'Montserrat-Medium',
        color: Colors.greyplaceholder
    },

    progressCont: {
        width: widthPixel(300),
        flexDirection: 'row'
    },

    optionTxtCont: {
        flexDirection: 'row',
        textAlign: "center",
        position: 'absolute',
        height: heightPixel(40),
    }
});

export { styles }