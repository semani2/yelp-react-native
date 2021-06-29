import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (term) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: term,
                    location: 'Toronto, Canada',
                    limit: 50
                }
            });
            console.log(response.status);
            response.data.businesses.forEach(business => {
               console.log(business.name); 
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong! Try again later.')
        }
        
    }

    // Call searchApi when component is first rendered
    // Calls the enclosed method only once
    useEffect(() => {
        searchApi('Breakfast');
    }, []);

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