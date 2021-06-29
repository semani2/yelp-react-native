import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                term: searchTerm,
                location: 'Toronto, Canada',
                limit: 50
            }
        });
        console.log(response.status);
        response.data.businesses.forEach(business => {
           console.log(business.name); 
        });
        setResults(response.data.businesses);
    }

    return (
        <View 
            style={{backgroundColor: 'white', ...StyleSheet.absoluteFillObject}}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm}
                onSearchSubmit={searchApi}/>

            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;