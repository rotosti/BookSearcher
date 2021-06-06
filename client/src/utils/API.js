import axios from 'axios';

export default {
    getSavedBooks: () => {
        return axios.get('/api/books/');
    },
    saveBook: (book) => {
        return axios.post('/api/books/', book);
    },
    removeSavedBook: (id) => {
        return axios.delete('/api/books/' + id);
    },
    searchGoogleForBooks: (search) => {
        search.trim();
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+intitle`)
    }
}