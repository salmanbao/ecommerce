import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';


const Coupon = ({ coupon }) => {

    if (coupon == null)
        return null;

    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={styles.column}>
                <View style={{ height: 15, backgroundColor: '#fafafa' }} />
                <View style={styles.row}>
                    <Text style={styles.heading}>
                        New User Coupon
                </Text>
                    <View style={styles.redBox}>
                        <View style={styles.leftBox}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginBottom: 8 }}>{coupon.amount}{coupon.discount_type === 'percent' ? '%' : 'ر.ع'}</Text>
                            <Text style={{ color: 'white', fontSize: 10 }}>Orders over ر.ع{coupon.minimum_amount}</Text>
                            <Text style={{ color: 'white', fontSize: 10 }}>{coupon.date_created} - {coupon.date_expires}</Text>
                        </View>
                        <View style={styles.rightBox}>
                            <Button
                                title="GET NOW"
                                titleStyle={{ color: 'black', fontSize: 16, fontWeight: '700' }}
                                buttonStyle={{ backgroundColor: 'white', borderRadius: 40 }}
                                containerStyle={{ backgroundColor: '#ff4b5c' }}
                            />
                        </View>
                    </View>
                    <View>
                        <ListItem onPress={() => console.log('coupon clicked')}>
                            <ListItem.Content>
                                <ListItem.Title style={{ fontWeight: '700' }}>Discounts & Coupons</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </View>
                </View>
            </View>
        </View>
    );
};

function mapStateToProps({ products }) {
    const { coupons } = products;
    return {
        coupon: coupons.length > 0 ? coupons[0] : null
    };
}

export default connect(mapStateToProps, null)(Coupon)

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
    heading: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black'
    },
    redBox: {
        backgroundColor: '#ff4b5c',
        flexDirection: 'row',
        display: 'flex',
        borderRadius: 5,
        marginTop: 5
    },
    leftBox: {
        flexDirection: 'column',
        width: '60%',
        marginHorizontal: 10,
        marginVertical: 10
    },
    rightBox: {
        backgroundColor: '#ff4b5c',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '30%'
    }
})