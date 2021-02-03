const mongoose = require('mongoose');
require('dotenv').config();
const connectionStr = process.env.DATABASE_URL || 'mongodb://localhost/drop';

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: false,
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});