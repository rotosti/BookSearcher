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
        console.log(search);
        search = search.trim().replace(' ', '+').toLowerCase();
        console.log(search);
        return await axios.get('/api/books/search/' + search);
    }
}