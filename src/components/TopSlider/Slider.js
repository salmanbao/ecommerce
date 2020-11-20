import React, { Component } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../theme/slideEntryStyles';
import SliderEntry from './sliderEntry';
import styles, { colors } from '../../theme/sliderStyles';
import { connect } from 'react-redux';

const SLIDER_1_FIRST_ITEM = 1;

class Slider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItemWithParallax({ item, index }, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    MainSlider() {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.sliderContainer}>
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={this.props.on_sale}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    //   inactiveSlideShift={20}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                />
                <Pagination
                    dotsLength={5}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={colors.black}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={this._slider1Ref}
                    tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }

    get gradient() {
        return (
            <LinearGradient
                colors={[colors.background1, colors.background2]}
                startPoint={{ x: 1, y: 0 }}
                endPoint={{ x: 0, y: 1 }}
                style={styles.gradient}
            />
        );
    }

    render() {
        const slider = this.MainSlider();

        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor={'rgba(0, 0, 0, 0.3)'}
                    barStyle={'light-content'}
                />
                <ScrollView
                    style={styles.scrollview}
                    scrollEventThrottle={200}
                    directionalLockEnabled={true}
                >
                    {slider}
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const { on_sale } = state.products;
    return {
        on_sale: on_sale
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getSliderProducts: () => dispatch(ProductActions.getOnSaleProducts())
//     }
// };

export default connect(mapStateToProps, null)(Slider)