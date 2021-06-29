import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useRestaurants();

    const filterResultsByPrice = (price) => {
        // Price === "$" || "$$" || "$$$"
        return results.filter(result => {
            return result.price === price;
        })
    }

    const getRestaurantData = () => {
        const data = [];
        data.push({
            title: 'Cost Effective',
            restaurants: filterResultsByPrice('$')
        });
        data.push({
            title: 'Bit Pricier',
            restaurants: filterResultsByPrice('$$')
        });
        data.push({
            title: 'Big Spender',
            restaurants: filterResultsByPrice('$$$')
        });

        return data;
    }
   
    return (
        <View 
            style={{backgroundColor: 'white', ...StyleSheet.absoluteFillObject}}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm}
                onSearchSubmit={() => searchApi(searchTerm)}/>

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <FlatList 
                style={styles.listStyle}
                data={getRestaurantData()}
                keyExtractor={(item) => item.title}
                renderItem={({item}) => {
                    console.log(item);
                    return <RestaurantList title={item.title} restaurants={item.restaurants}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listStyle: {
        marginBottom: 15
    }
});

export default SearchScreen;