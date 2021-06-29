import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ( {title, restaurants} ) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={restaurant => restaurant.id}
                renderItem = {({item}) => {
                    return <RestaurantItem restaurant={item}/>
                }}
            />

            <View style={styles.divStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginStart: 15
    },
    containerStyle: {
        marginTop: 15,
    },
    divStyle: { 
        borderBottomColor: 'grey', 
        borderBottomWidth: 0.5,
        marginHorizontal: 15,
        marginTop: 10
    }
});

export default RestaurantList;