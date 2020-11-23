var cors = require('cors')
const mongoose = require('mongoose');
//const genres = require('./routes/genres');
const customers = require('./routes/customers');
const express = require('express');
const app = express();

app.use(cors());

mongoose.connect("mongodb://localhost/vidly").then(()=>{
    console.log("connected to mongo DB");
}).catch((err)=>{
    console.log(err.message);
});


app.use(express.json());
//app.use('/api/genres', genres);
app.use('/api/customers', customers);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));