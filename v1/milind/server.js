require('dotenv').config()
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const port = process.env.PORT || 3000;
const adminRoute = require('./routes/adminroutes')
const userRoute = require('./routes/userRoute')
const landmarkRoute = require('./routes/landmarkRouter')
const ratingRoute = require('./routes/ratingRoutes');
const range = require('./range')
const app = express();

//initializing of mongoDb
mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
    
});

mongoose.connection.once('open', (err) => {
    console.log( err || 'connected to database...')
   
})

//middleware
app.use(range);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use('/admin', adminRoute);
app.use('/user', userRoute)
app.use('/landmark', landmarkRoute);
app.use('/rating', ratingRoute);
app.get('/', (req,res) => {
    res.send('welcome to landmark locator')
})

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})

