const express = require("express")

const app = express();

require("dotenv").config();

app.use(express.json())

const connectDB = require ('./config/connectDB')

connectDB();

app.use ('/api/messages' , require ('./routes/messages'))

app.use ('/api/inscri' , require ('./routes/inscri'))

app.use ('/api/admin' , require ('./routes/admin'))


const PORT = process.env.PORT || 3200

app.listen(PORT  , error =>{
    
    error? console.error(`Fail to connect , ${error}`)
    :
    console.error(`Server is running on port ${PORT}`)
})
