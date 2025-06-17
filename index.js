import express from 'express'
import router from './router.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'

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
    users.push({
        username,
        password
    })
    res.send(`User is registered successfully`)
})


app.post('/login', (req,res) =>{
    const {username, password} = req.body
    const user = users.find(u=>u.username === username)
    if(!user || password !== user.password){
        res.send('invalid credentials')
    } else {
        req.session.user = user
        res.send('Logined successfully')
    }
})

app.get('/dash',(req,res) =>{
    if(!req.session.user){
        return res.send('please login')
    }
    const user = req.session.user
    res.send(`Welcom ${user.username}`)
})

app.get('/', (req,res) =>{
    res.send('Hello there')
})
app.listen(PORT,() =>[
    console.log(`server is running on http://localhost:${PORT}`)
])