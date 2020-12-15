import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ActivityIndicator, Pressable } from 'react-native';
import { ListItem, Image, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Star from 'react-native-star-view';
import { Seperator } from './seperator';
import HTML from 'react-native-render-html';

const CustomerReview = ({ reviews}) => {
    const [ignoredStyles, setFontFamily] = useState(['font-family'])

    useEffect(() => {
        return () => {
            setFontFamily([])
        }
    })
    return (
        <View style={styles.column}>
            <View style={{ height: 15, backgroundColor: '#fafafa' }} />

            <ListItem onPress={() => { console.log('customer review clicked') }}>
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: '600', fontSize: 16, marginBottom: 5 }}>Customer Reviews ({reviews.length})</ListItem.Title>
                    <View style={styles.images}>

                        {
                            reviews.map((r) => (
                                <Pressable onPress={() => { console.log('review_id', r.id) }}>
                                    <Image
                                        source={{ uri: r.reviewer_avatar_urls[Object.keys(r.reviewer_avatar_urls)[0]] }}
                                        style={{ width: 50, height: 50 }}
                                        containerStyle={{ borderRadius: 5, marginRight: 5 }}
                                        PlaceholderContent={<ActivityIndicator />}
                                    />
                                </Pressable>

                            ))
                        }

                        <Button
                            icon={
                                <Icon
                                    name="ellipsis-h"
                                    size={15}
                                    color="black"
                                />
                            }
                            buttonStyle={{ height: 50, borderColor: 'black' }}
                            type="outline"
                            onPress={() => { console.log('button clicked') }}
                        />

                    </View>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <Seperator />
            {reviews.length > 0 &&
                <View style={{ display: 'flex', flexDirection: 'column' }}>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginVertical: 8,
                        marginHorizontal: 15,
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: 'grey' }}>{reviews[0]['reviewer']}</Text>
                    <Text style={{ color: 'grey' }}>{reviews[0]['date_created']}</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column', marginHorizontal: 15, marginVertical: 0 }}>
                    <Star score={reviews[0]['rating']} style={styles.starStyle, { marginLeft: 15 }} />
                    <HTML html={reviews[0]['review']} containerStyle={{ fontSize: 12, marginHorizontal: 10 }} ignoredStyles={ignoredStyles} />
                        <Text style={{ textDecorationLine: 'underline', color: '#85C1E9', marginTop: 5 }}>View All</Text>
                    </View>
                </View>
            }

        </View>
    );
};

function mapStateToProps(state) {
    const { reviews } = state.products;
    return {
        reviews
    };
}

export default connect(mapStateToProps, null)(CustomerReview)


const styles = StyleSheet.create({
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 15,
        marginVertical: 15,
        backgroundColor: 'white',
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
    },
    starStyle: {
        height: 10,
    },
})