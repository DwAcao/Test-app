require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('API is running!');
  });
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
