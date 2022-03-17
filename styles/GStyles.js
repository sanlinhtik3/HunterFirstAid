import { StyleSheet } from "react-native";
import { color } from "./Color";

export const GStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.slate["50"],
    },
    card: {
        borderWidth: 1,
        borderColor: color.slate["300"],
        width: '100%',
        borderRadius: 10,
        flex: 1,
        marginBottom: 10
    },
    cardImage: {
        width: '100%',
        maxWidth: '100%',
        height: 250,
        maxHeight: '100%',
        borderRadius: 10,
        marginBottom: 10
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    cardText: {
        //
    },
    cardImageRight: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    cardHeader: {
        backgroundColor: color.slate["500"],
        padding: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    },
    cardHeaderText: {
        fontWeight: "bold",
        fontSize: 18
    },
    cardFooter: {
        backgroundColor: color.slate["500"],
        padding: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    cardBody: {
        padding: 10
    },
    listGroup: {
        //
    },
    listGroupItem: {
        borderBottomWidth: 1,
        borderBottomColor: color.slate["200"],
        padding: 10
    },
    circle: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    // Utilities
    me1: {
        marginEnd: 10
    },
    me2: {
        marginEnd: 15
    },
    mb1: {
        marginBottom: 10
    },
    p1: {
        padding: 10
    },
    p2: {
        padding: 15
    },

    // FlexBox
    row: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    jcc: {
        justifyContent: "center"
    },
    jcs: {
        justifyContent: 'flex-start'
    },
    jce: {
        justifyContent: 'flex-end'
    },
    jcsb: {
        justifyContent: 'space-between'
    },
    aic: {
        alignItems: "center"
    },
    h1: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    h3: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    h4: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    h5: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    h6: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    text: {
        color: color.slate["700"],
    },
    textMute: {
        color: color.slate["500"]
    },
    para: {
        lineHeight: 28,
        fontSize: 16
    },
    bb: {
        // borderBottomWidth: .5,
        // borderBottomColor: color.slate["300"]
    },
    line: {
        width: 'auto',
        height: 1,
        backgroundColor: color.slate["200"],
        marginBottom: 10
    }
});

export const spacing = {
    px: 1,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    12: 48,
    16: 64,
    20: 80,
    24: 96,
    32: 128,
    40: 160,
    48: 192,
    56: 224,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
};