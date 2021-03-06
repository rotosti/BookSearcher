const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
};

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks').catch((err)=> {
console.log("MONGO ERR!!!!!!!", err)
})

app.listen(PORT, () => {
    console.log(`Active port: ${PORT}`);
})