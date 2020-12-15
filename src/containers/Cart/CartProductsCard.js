import * as React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import styles, {
    _cardStyle,
    _textStyle,
    _circleCheckContainer,
} from './CartProductsCardStyle';
import { ThemeColors, DARK, LIGHT } from "./theme";
import NumericInput from 'react-native-numeric-input'
const { width: ScreenWidth } = Dimensions.get("window");

const defaultCheckIcon = require("./local-assets/check-icon-dark.png");


export default class CartProductsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: props.darkMode ? DARK : LIGHT,
            checked: props.isChecked || false,
            value: 0
        };
    }

    handleOnPress = () => {
        this.setState({ checked: !this.state.checked }, () => {
            this.props.onPress && this.props.onPress(this.state.checked);
        });
    };

    renderCheckIcon = () => {
        const {
            checkIconComponent,
            ImageComponent = Image,
            checkImageSource = defaultCheckIcon,
        } = this.props;
        return (
            checkIconComponent || (
                <ImageComponent
                    resizeMode="contain"
                    source={checkImageSource}
                    style={styles.checkIconImageStyle}
                />
            )
        );
    };

    renderCircleCheck = () => {
        const { theme, checked } = this.state;
        const {
            circleSize = 18,
            circleBorderRadius = 25,
            circleBackgroundColor = "#f56a79",
            circleBorderColor = ThemeColors[theme].borderColor,
        } = this.props;
        return (
            <View
                style={_circleCheckContainer(
                    checked,
                    circleSize,
                    circleBorderRadius,
                    circleBackgroundColor,
                    circleBorderColor,
                )}
            >
                {checked && this.renderCheckIcon()}
            </View>
        );
    };

    renderProductContainer = () => {

        const {
            product,
        } = this.props;

        return (
            <View style={styles.productContainer}>
                <View>
                    <Image
                        style={{ height: '0%', width: 60 }}
                        resizeMode={'contain'}
                        source={{
                            uri: product['images'][0]['src'],
                        }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 5 }}>
                    <View>
                        <Text
                            numberOfLines={2}
                        >{product.name}
                        </Text>
                    </View>

                    <View>
                        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>
                            ر.ع {product.regular_price}
                        </Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <Text style={{ fontSize: 8, color: 'blue' }}>
                                Sub Total:ر.ع {product.regular_price}
                            </Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 5 }}>
                            <NumericInput
                                value={this.state.value}
                                minValue={1}
                                onChange={value => this.setState({ value })}
                                totalWidth={70}
                                totalHeight={30}
                                initValue={0}
                                type={'plus-minus'}
                                step={1.5}
                                valueType='integer'
                                rounded={true}
                                containerStyle={{ backgroundColor: 'white' }}
                                textColor='#B0228C'
                                iconStyle={{ color: 'grey' }}
                                rightButtonBackgroundColor='white'
                                leftButtonBackgroundColor='white' />

                        </View>

                    </View>
                </View>
            </View>
        );
    };
    render() {
        const { theme } = this.state;
        const {
            height = 130,
            borderRadius = 10,
            width = ScreenWidth * 1,
            backgroundColor = ThemeColors[theme].backgroundColor,
        } = this.props;
        return (
            <RNBounceable
                bounceEffect={0.97}
                bounceFriction={3}
                {...this.props}
                style={styles.container}
                onPress={this.handleOnPress}
            >
                <View style={_cardStyle(height, width, borderRadius, backgroundColor)}>
                    {this.renderCircleCheck()}
                    {this.renderProductContainer()}
                </View>
            </RNBounceable>
        );
    }
}
