const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test', {
    useMongoClient: true,
});

mongoose.connection
    .once('open', () => console.log("Connection established"))
    .on('error', (error) => {
        console.warn('Warning', error);
    });