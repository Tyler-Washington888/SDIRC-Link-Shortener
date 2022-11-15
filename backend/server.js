const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT
const app = express()

connectDB()


app.use(express.json({extended: false}));
 
app.use('/api/links', require('./routes/linkRoutes'))
app.use('/', require('./routes/index'))

app.listen(port, () => console.log(`Server started on port ${port}`))

 