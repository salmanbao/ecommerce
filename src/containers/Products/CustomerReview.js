import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { ListItem, Image, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Star from 'react-native-star-view';
import { Seperator } from './seperator';

export const CustomerReview = () => {
    return (
        <View style={styles.column}>
            <View style={{ height: 15, backgroundColor: '#fafafa' }} />

            <ListItem onPress={() => { console.log('customer review clicked') }}>
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: '600', fontSize: 16, marginBottom: 5 }}>Customer Reviews (124)</ListItem.Title>
                    <View style={styles.images}>

                        <View>
                            <Image
                                source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                                style={{ width: 50, height: 50 }}
                                containerStyle={{ borderRadius: 5, marginRight: 5 }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                        </View>

                        <View>
                            <Image
                                source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                                style={{ width: 50, height: 50 }}
                                containerStyle={{ borderRadius: 5, marginRight: 5 }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                        </View>

                        <View>
                            <Image
                                source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                                style={{ width: 50, height: 50 }}
                                containerStyle={{ borderRadius: 5, marginRight: 5 }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                        </View>

                        <View>
                            <Image
                                source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                                style={{ width: 50, height: 50 }}
                                containerStyle={{ borderRadius: 5, marginRight: 5 }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                        </View>

                        <View>
                            <Image
                                source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                                style={{ width: 50, height: 50 }}
                                containerStyle={{ borderRadius: 5, marginRight: 5 }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                        </View>
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
            <View style={{ display: 'flex', flexDirection: 'column' }}>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginVertical: 8,
                    marginHorizontal: 15,
                    justifyContent: 'space-between',
                }}>
                    <Text style={{ color: 'grey' }}>M****</Text>
                    <Text style={{ color: 'grey' }}>26 Sep 2020</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', marginHorizontal: 15, marginVertical: 0 }}>
                    <Star score={4} style={styles.starStyle, { marginLeft: 15 }} />
                    <Text style={{fontSize:12}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                    <Text style={{textDecorationLine:'underline',color:'#85C1E9',marginTop:5}}>View All</Text>
                </View>
            </View>

        </View>
    );
};

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