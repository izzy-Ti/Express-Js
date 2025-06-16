import express from 'express'
import router from './router.js'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = 3000

app.use(cookieParser())
app.get('/', (req,res) =>{
    res.cookie('name', 'Abebe')
    res.send('Hello there')
})
app.post('/fetch',express.json(), (req,res) =>{
    const {name,email,password} = req.body
    res.cookie('name',`${name}`)
    res.cookie('email',`${email}`)
    res.cookie('password',`${password}`)
    res.send('Hello '+ `${name}` + ' ur logged in with ' + `${email}`)
})
app.listen(PORT,() =>[
    console.log(`server is running on http://localhost:${PORT}`)
])