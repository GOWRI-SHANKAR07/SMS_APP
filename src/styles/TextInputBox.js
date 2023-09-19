import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical } from "../Constants/Theme";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    inpTxt: {
        borderWidth: 1,
        borderColor: Colors.greyMessage,
        marginTop: pixelSizeVertical(10),
        borderRadius: 5,
        alignItems: 'flex-start',
        fontFamily: 'Montserrat-Medium',
        paddingLeft: pixelSizeHorizontal(10),
    }
})

export { styles };