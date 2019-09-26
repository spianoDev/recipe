const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipe', { useNewUrlParser: true}, () => {
    console.log('Connection Established');
});

mongoose.Promise = Promise;
module.exports = mongoose;
