import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
            style={{backgroundColor: 'white', ...StyleSheet.absoluteFillObject}}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm}
                onSearchSubmit={() => searchApi(searchTerm)}/>

            <Text>We have found {results.length} results</Text>

            {errorMessage ? <Text>{errorMessage}</Text> : null}



            <RestaurantList title="Cost Effective" restaurants={filterResultsByPrice("$")}/>
            <RestaurantList title="Bit Pricier" restaurants={filterResultsByPrice("$$")}/>
            <RestaurantList title="Big Spender" restaurants={filterResultsByPrice("$$$")}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;