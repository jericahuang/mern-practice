const express = require('express');
const cors = require('cors'); //cross origin resource sharing
const mongoose = require ('mongoose'); //mongoDB support

require ('dotenv').config(); //environment variables in .env

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//mongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//routers; using models
const moviesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
});