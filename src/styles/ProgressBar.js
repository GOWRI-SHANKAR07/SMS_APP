import { StyleSheet } from "react-native";
import { Colors, pixelSizeHorizontal, pixelSizeVertical } from "../Constants/Theme";
import { center } from "@shopify/react-native-skia";

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
    },
    voteCont: {
        flexDirection: 'row',
        marginTop: pixelSizeVertical(10)
    },
    prgCont: {
        flexDirection: 'row'
    },
    selectedIcon: {
        marginLeft: pixelSizeHorizontal(55),
        top: pixelSizeVertical(5)
    },
    voteTxt: {
        fontFamily: 'Montserrat-Medium'
    }
});

export { styles }