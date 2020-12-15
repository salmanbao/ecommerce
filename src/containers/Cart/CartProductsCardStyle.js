import {
    Dimensions,
    StyleSheet
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");


export const _cardStyle = (height, width, borderRadius, backgroundColor) => ({
    height,
    width,
    borderRadius,
    backgroundColor,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: "row",
    alignItems: "center",
});

export const _textStyle = (checked, checkedTextColor, uncheckedTextColor) => ({
    fontSize: 16,
    marginLeft: 16,
    fontWeight: "600",
    textDecorationLine: checked ? "line-through" : "none",
    color: checked ? checkedTextColor : uncheckedTextColor,
});

export const _circleCheckContainer = (checked, circleSize, circleBorderRadius, circleBackgroundColor, circleBorderColor) => ({
    width: circleSize,
    height: circleSize,
    borderRadius: circleBorderRadius,
    borderColor: checked ? "grey" : circleBorderColor,
    backgroundColor: checked ? circleBackgroundColor : "transparent",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5
});

export default StyleSheet.create({
    container: {
        marginBottom: 15,
        width: ScreenWidth,
    },
    productContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding:25
    },
    textContainer: {
        width: "80%",
    },
    checkIconImageStyle: {
        width: 15,
        height: 15,
    },
});
