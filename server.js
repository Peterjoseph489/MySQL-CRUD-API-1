const express = require('express');
const PORT = process.env.PORT || 3030
const router = require('./routes/route')
const { sequelize, connectDB } = require('./config/dbConfig')

const app = express();
app.use(express.json())

app.use('/learn', router)

app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'Welcome to my API, Let us try out some CRUD Operations on MySQL'
    })
})

app.listen(PORT, async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
    await connectDB();
})
