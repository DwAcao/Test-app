require('dotenv').config();
const mongoose = require('mongoose');
const Subscriber = require('./models/subscriber');

mongoose.connect(process.env.DATABASE_URL);

const subscriber = new Subscriber({
  name: 'Charlie',
  subscribedToChannel: 'Express Tutorials'
});

subscriber.save().then(() => {
  console.log('Subscriber added!');
  mongoose.connection.close();
});
