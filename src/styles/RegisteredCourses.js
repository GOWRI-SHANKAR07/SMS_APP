import { Colors, fontPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height: '100%',
        alignItems: "center"
    },

    headerCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: pixelSizeVertical(20),
        // borderWidth: 1,
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

    coursesCont: {
        // borderWidth: 1,
        width: widthPixel(380),
        top: pixelSizeVertical(10),
        // backgroundColor: Colors.grey,
    },

    coursesTxt: {
        fontSize: fontPixel(18),
        color: Colors.black,
        padding: pixelSizeHorizontal(15),
        backgroundColor: '#00A1',
        fontFamily: 'Montserrat-SemiBold'
    },
})

export { styles };