import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../../theme/slideEntryStyles';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image() {
        const { data: { images }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
                resizeMode={'contain'}
                source={{ uri: images[0].src }}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={styles.image}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
                <Image
                    source={{ uri: images[0].src }}
                    style={styles.image}
                />
            );
    }

    render() {
        const { data: { name }, even } = this.props;

        const uppercaseTitle = name ? (
            <Text
                style={[styles.title,  styles.titleEven ]}
                numberOfLines={2}
            >
                { name.toUpperCase()}
            </Text>
        ) : false;

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => { console.log(`You've clicked '${name}'`); }}
            >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, styles.imageContainerEven]}>
                    {this.image}
                    <View style={[styles.radiusMask, styles.radiusMaskEven ]} />
                </View>
                <View style={[styles.textContainer,  styles.textContainerEven ]}>
                    {uppercaseTitle}
                    {/* <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                      numberOfLines={2}
                    >
                        { subtitle }
                    </Text> */}
                </View>
            </TouchableOpacity>
        );
    }
}