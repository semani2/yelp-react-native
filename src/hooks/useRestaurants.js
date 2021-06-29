import { useState, useEffect } from 'react'
import yelp from '../api/yelp';

export default () => {
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
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong! Try again later.')
        }
        
    }

    // Call searchApi when component is first rendered
    // Calls the enclosed method only once
    useEffect(() => {
        searchApi('');
    }, []);

    return [searchApi, results, errorMessage];
};