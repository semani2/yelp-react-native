import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({searchTerm, onSearchTermChange, onSearchSubmit}) => {
    return (
        <View style={styles.parentStyle}>
            <Feather name="search" size={30} color="black" style={styles.searchIconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.searchTextInputStyle} 
                placeholder="Search"
                value={searchTerm}
                onChangeText={onSearchTermChange} //Short hand without parameters, super cool
                onEndEditing={onSearchSubmit}/>
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginTop: 15,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
    },
    searchIconStyle: {
        alignSelf: 'center',
        marginHorizontal: 12
    },
    searchTextInputStyle: {
        flex:1,
        fontSize: 18
    }
});

export default SearchBar;