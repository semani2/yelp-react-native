import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useRestaurants();
   
    return (
        <View 
            style={{backgroundColor: 'white', ...StyleSheet.absoluteFillObject}}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm}
                onSearchSubmit={() => searchApi(searchTerm)}/>

            <Text>We have found {results.length} results</Text>

            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;