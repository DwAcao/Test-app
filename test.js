require('dotenv').config();
const mongoose = require('mongoose');
const Subscriber = require('./models/subscriber'); // or your model

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    // Example: Print all subscribers
    const subscribers = await Subscriber.find();
    console.log('Subscribers:', subscribers);

    mongoose.connection.close();
});
