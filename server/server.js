const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const port = process.env.PORT || 5000;
// const cors = require('cors')
const usersRoute = require('./routes/usersRoute');
// app.use(cors());
const cors=require("cors");

const corsOptions={
credential:true,
origin:"front end path"
}

app.use(cors(corsOptions));
app.use('/api/users', usersRoute);
app.listen(port,()=>console.log(`Node/Express started on ${port}`));
// app.listen(port, () => console.log(`Node/Express Server started on port ${port}`));