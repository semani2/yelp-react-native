import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
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
   
    return (
        <View 
            style={{backgroundColor: 'white', flex: 1}}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm}
                onSearchSubmit={() => searchApi(searchTerm)}/>

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView style={{marginBottom: 10}}>
                <RestaurantList title='Cost Effective' restaurants={filterResultsByPrice('$')} />
                <RestaurantList title='Bit Pricier' restaurants={filterResultsByPrice('$$')} />
                <RestaurantList title='Big Spender' restaurants={filterResultsByPrice('$$$')} />
            </ScrollView>
        
        </View>
    );
};

const styles = StyleSheet.create({
    listStyle: {
        marginBottom: 15
    }
});

export default SearchScreen;