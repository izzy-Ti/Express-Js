import express from 'express'
import router from './router.js'
import mongoose from 'mongoose'
import {upload} from './config/multer.js'
const app = express()
const PORT = 3000
const MONGOBD_URI = 'mongodb+srv://express:0911700417@cluster0.ddgtcqv.mongodb.net/ex'

mongoose.connect(MONGOBD_URI).then(()=>{
    console.log(`Database connected`);
})

app.set('view engine', 'ejs')
app.use('/post', (express.urlencoded({extended:true})))
app.use('/post', upload.single('image'))
app.post('/post', (req, res) =>{
    console.log(req.body);
    console.log(req.file)
    res.send('Form recieved')
})
app.listen(PORT,() =>[
    console.log(`server is running on http://localhost:${PORT}`)
])