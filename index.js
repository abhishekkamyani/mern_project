require('dotenv').config()
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const quoteRouter = require('./routes/quote');


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database is connected'))
.catch(error => console.log(`Error connecting to MongoDB ${error}`));


server.use(cors());
server.use(express.json()); //body parser
server.use('/quotes', quoteRouter.router);

server.use(express.static(process.env.PUBLIC_DIR));

server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,process.env.PUBLIC_DIR,'index.html'));
})

console.log(__dirname);


server.listen(process.env.PORT, () => {
    console.log('server started');
})