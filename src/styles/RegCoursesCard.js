import { Colors, fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginBottom: pixelSizeVertical(10),
        borderRadius: 5,
    },

    outerCont: {
        borderRadius: 5,
        // borderWidth: 1,
        backgroundColor: Colors.grey,
        padding: pixelSizeHorizontal(5),
    },

    innerCont: {
        backgroundColor: Colors.grey,
        // borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.black,
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
        fontFamily: 'Montserrat-Medium',
        color: Colors.black
    },

    innerSub: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        right: pixelSizeHorizontal(70),
        borderTopColor: Colors.greyMessage,
    },

    statusCont: {
        borderTopWidth: 1,
        borderTopColor: Colors.greyMessage,
        backgroundColor: Colors.grey,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: pixelSizeVertical(5),
        marginBottom: pixelSizeVertical(10),
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