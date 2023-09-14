import { Colors, fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
    },

    innerCont: {
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderColor: Colors.grey,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: pixelSizeHorizontal(15),
        paddingBottom: pixelSizeHorizontal(15),
    },

    txt: {
        fontSize: fontPixel(15),
        color: Colors.black,
        fontFamily: 'Montserrat-SemiBold'
    },

    detailsCont: {
        // margin: pixelSizeHorizontal(15),
    },

    subCont: {
        // borderWidth: 1,
    },

    subTxt: {
        // borderWidth: 1,
        padding: pixelSizeVertical(8),
        fontFamily: 'Montserrat-Medium'
    },

    innerSub: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: Colors.grey,
    },

    statusCont: {
        // borderWidth: 1, 
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: pixelSizeVertical(5)
    },

    statusTxt: {
        color: Colors.green,
        fontSize: fontPixel(15),
        fontFamily: 'Montserrat-Medium'
    },

    warnIcon: {
        borderWidth: 1, 
        height: heightPixel(20), 
        width: widthPixel(20), 
        alignSelf: 'center', 
        paddingLeft: pixelSizeHorizontal(1),
        paddingTop: pixelSizeVertical(1),
        borderColor: '#ffffff00'
    }
})

export { styles };