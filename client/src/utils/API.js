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
    searchGoogleForBooks: async (search) => {
        search = search.trim().replace(' ', '+').toLowerCase();
        return await axios.get('/api/books/search/' + search);
    }
}