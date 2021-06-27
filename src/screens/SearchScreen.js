import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    return (
        <View style={{backgroundColor: 'white', ...StyleSheet.absoluteFillObject}}>
            <SearchBar />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;