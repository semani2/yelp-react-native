import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantItem = ({restaurant}) => {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={{
                uri: restaurant.image_url
            }}/>
            <Text style={styles.headerStyle}>{restaurant.name}</Text>
            <View style={styles.subHeaderStyle}>
                <Text style={styles.ratingTextStyle}>{restaurant.rating} Stars,</Text>
                <Text style={styles.reviewTextStyle}>{restaurant.review_count} Reviews</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 16,
        fontWeight:'bold',
        marginTop: 8
    },
    subHeaderStyle: {
        flexDirection:'row',
        marginTop: 8
    },
    imageStyle: {
        height: 135,
        width: 220,
        borderRadius: 5
    },
    containerStyle: {
        marginStart: 15,
        marginTop: 10
    },
    reviewTextStyle: {
        marginStart: 2,
        color: 'grey'
    },
    ratingTextStyle: {
        color: 'grey'
    }
});

export default RestaurantItem;