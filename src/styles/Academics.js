import { center } from "@shopify/react-native-skia";
import { Colors, fontPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Colors.white
    },

    headerCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: pixelSizeVertical(20),
        // borderWidth: 1,
        marginTop: pixelSizeVertical(10),
        bottom: pixelSizeVertical(10),
    },

    headerTxt: {
        color: Colors.black,
        fontSize: fontPixel(23), 
        fontFamily: 'Montserrat-SemiBold',
    },

    androidShadow: {
        elevation: 5,
        shadowColor: Colors.black
    },
    iosShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    menu: {
        marginRight: pixelSizeHorizontal(10)
    },

    chartCont: {
        padding: pixelSizeHorizontal(10),
    },

    innerTxt: {
        color: Colors.black,
        marginBottom: pixelSizeVertical(10),
        fontSize: fontPixel(17),
        fontFamily: 'Montserrat-Medium'
    },

    coursesCont: {
        // borderWidth: 1,
        bottom: pixelSizeVertical(70)
    },

    coursesTxt: {
        fontSize: fontPixel(18),
        color: Colors.black,
        padding: pixelSizeHorizontal(15),
        backgroundColor: '#00A1',
        fontFamily: 'Montserrat-SemiBold'
    },

    progressCont: {
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },

    desTxt1: {
        width: widthPixel(60),
        alignItems: "center",
        bottom: pixelSizeVertical(95),
        left: pixelSizeHorizontal(80),
    },

    desTxt2: {
        width: widthPixel(60),
        alignItems: "center",
        bottom: pixelSizeVertical(152),
        left: pixelSizeHorizontal(255),
    }
})

export {  styles };