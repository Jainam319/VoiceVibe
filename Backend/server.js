require('dotenv').config();
const router = require('./router');
const express = require('express')
const app = express();
const DBConnect = require('./database')

const PORT = process.env.PORT || 5500;
DBConnect();

app.use(express.json())  // json middleware
app.use(router);   // express will know that router is exist

app.get('/',(req,res)=>{
    res.send("Hello From Express")
})

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})