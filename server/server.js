require('dotenv').config()
const cors = require('cors');

const express = require('express');
// const session = require('express-session');
const app = express();

// const User = require('./models/userModel');

const connectDB = require('./config/db')

//routes
const userRoutes = require('./routes/userRoutes');
const moodRoutes = require('./routes/moodRoutes');
const yearRoutes = require('./routes/yearRoutes');

//middleware
app.use(express.json());
app.use(cors());

//routes and paths
app.use('/user', userRoutes);
app.use('/mood', moodRoutes);
app.use('/year', yearRoutes)

app.listen(process.env.PORT,()=>{
  connectDB()
})

app.get('/',(req,res)=>{
  res.json("Hello from backend test")
})