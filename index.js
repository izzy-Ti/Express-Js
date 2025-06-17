import express from 'express'
import router from './router.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const app = express()
const PORT = 3000
const users = []

app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret:`sample-secret`,
    resave: false,
    saveUninitialized: false
}))

app.post('/reg', async (req,res) =>{
    const {username, password} = req.body
    const hashedPassword = await bcrypt.hash(password,10)
    users.push({
        username,
        password:hashedPassword
    })
    res.send(`User is registered successfully`)
})

app.post('/login', async (req,res) =>{
    const {username, password} = req.body
    const user = users.find(u=>u.username === username)
    if(!user || !(await bcrypt.compare(password, user.password))){
        res.send('invalid credentials')
    } 
    const token = jwt.sign({username},'text#secret')
    res.json({token})
})

app.get('/dash',async (req,res) =>{
    try{
    const token =req.header('Authorization')
    const decoded = await jwt.verify(token, 'text#secret')
    if(decoded.username){
        res.send(`welcome`)
    } else {
        res.send('asccess denied')
    }} catch (error){
        res.send('server error')
    }
})

app.get('/', (req,res) =>{
    res.send('Hello there')
})
app.listen(PORT,() =>[
    console.log(`server is running on http://localhost:${PORT}`)
])