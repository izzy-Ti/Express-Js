import express from 'express'
import router from './router.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()
const PORT = 3000

app.use(cookieParser())
app.use(session({
    secret:`sample-secret`,
    resave: false,
    saveUninitialized: false
}))

app.get('/visit', (req,res) =>{
    if(req.session.page_view){
        req.session.page_view ++;
        res.send(`You have visited this site ${req.session.page_view} times`)
    } else {
        req.session.page_view = 1;
        res.send('Welcom to this page')
    }
})
app.get('/', (req,res) =>{
    res.send('Hello there')
})
app.listen(PORT,() =>[
    console.log(`server is running on http://localhost:${PORT}`)
])