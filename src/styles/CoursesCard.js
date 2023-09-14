import { Colors, fontPixel, pixelSizeHorizontal, pixelSizeVertical } from "../Constants/Theme";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderBottomWidth: 2,
        borderColor: Colors.grey,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: pixelSizeHorizontal(15),
        marginBottom: pixelSizeVertical(2)
    },

    txt: {
        fontSize: fontPixel(15),
        color: Colors.black,
        fontFamily: 'Montserrat-Medium'
    }    
})

export {  styles };