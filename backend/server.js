const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const router = require('./routes/userRoutes')
const imageRouter = require('./routes/imageRoutes')

dotenv.config()

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())
connectDB()

// Main route
app.use('/api/user',router)
app.use('/api/image',imageRouter)

app.listen(PORT,()=>{
  console.log(`Server is running in port:${PORT}`);
})
