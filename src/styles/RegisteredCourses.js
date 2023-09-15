import { Colors, fontPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height: '100%',
        alignItems: "center"
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