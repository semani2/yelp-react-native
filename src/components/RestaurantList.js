import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ( {title, restaurants, navigation} ) => {
     
    if (!restaurants.length) {
        return null;
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={restaurant => restaurant.id}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', {id: item.id})}>
                            <RestaurantItem restaurant={item}/> 
                        </TouchableOpacity>
                    );
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

export default withNavigation(RestaurantList);