import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, 
        FlatList, Image, Dimensions, TouchableOpacity, Linking } from 'react-native'
import Star from 'react-native-star-view';
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import yelp from '../api/yelp';

const RestaurantDetailScreen = ({ navigation }) => {
    const restaurantId = navigation.getParam('id');
    const [restaurant, setRestaurant] = useState({});

    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`);
        setRestaurant(response.data);
    };

    const getCategories = () => {
        let categoryString = '';
        restaurant.categories.forEach(category => {
            console.log(category)
            categoryString.concat(category.title)
            categoryString.concat(" ")
        });
        console.log('String', categoryString)
        return categoryString;
    };

    useEffect(() => {
        getRestaurant(restaurantId);
    }, [])

    if (!restaurant) {
        return null;
    }

    return (
        <View>
            <ScrollView>
                <View>
                    <FlatList 
                        numColumns={1}
                        horizontal={true} 
                        showsHorizontalScrollIndicator= {false}
                        data={restaurant.photos}
                        keyExtractor={photo => photo}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Image 
                                            style={{width: Dimensions.get('window').width + 5, 
                                                height:250}} 
                                            source={{uri: item}} />
                                </View>
                            );
                        }}
                    />

                    {/* Header View */}
                    <View style={styles.headerViewStyle}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {
                                    Linking.canOpenURL(restaurant.url).then(supported => {
                                        if (supported) {
                                          Linking.openURL(restaurant.url);
                                        } else {
                                          console.log("Don't know how to open URI: " + restaurant.url);
                                        }
                                      });
                                    }}>
                                <Text style={styles.headerTextStyle}>{restaurant.name}</Text>
                                <EvilIcons name="external-link" size={24} color="black" style={{ alignSelf: 'center', marginStart: 5}}/>
                            </TouchableOpacity>
                        </View>
        
                        <View style={styles.headerRatingViewStyle}>
                            <Star score={restaurant.rating} style={styles.headerStarStyle} />
                            <Text style={styles.headerRatingTextStyle}>{restaurant.review_count} Reviews</Text>
                        </View>
                        <View style={styles.headerCategoryViewStyle}>
                            <Text>{restaurant.price} - </Text>
                            <Text>{restaurant.categories[0].title}</Text>
                        </View>

                        <View style={{borderBottomColor:'grey', borderBottomWidth: 0.5, marginTop: 8}}></View>
                    </View>

                     {/* Address View */}

                     <View style={styles.addressViewStyle}>
                         <View style={{flexDirection: 'row'}}>
                            <FontAwesome5 name="map-marked" size={24} color="grey" style={{alignSelf: 'center'}} />

                            <View style={{marginHorizontal: 10}}>
                                <Text>{restaurant.location.display_address[0]}</Text>
                                <Text>{restaurant.location.display_address[1]}</Text>
                            </View>
                         </View>

                         <View style={{borderBottomColor:'grey', borderBottomWidth: 0.5, marginTop: 8}}></View>                   
                         
                     </View>

                     <Text style={{marginStart: 15, marginTop: 10}}>{restaurant.display_phone}</Text>

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    headerViewStyle: {
        margin: 10
    },
    headerTextStyle: {
        fontSize: 18
    },
    headerStarStyle: {
        width: 100,
        height: 20
    },
    headerRatingViewStyle: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 5
    },
    headerRatingTextStyle: {
        marginStart: 5,
        alignSelf:'center'
    },
    headerCategoryViewStyle: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 5
    },
    addressViewStyle: {
        marginTop: 5,
        marginStart: 15
    },
});

export default RestaurantDetailScreen;