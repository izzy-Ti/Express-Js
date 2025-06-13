import express from 'express'
import router from './router.js'
const app = express()

const PORT = 3000

// Define a simple route
app.use('/user',router)
app.post('/user', express.json() ,(req,res) =>{
    const { name, email } = req.body;
    res.json({
        message: `user ${name} is registered with email ${email} successfully`
    })
})
app.put('/user/:id', express.json(), (req,res) =>{
    const userId = req.params.id;
    const {name, email} = req.body;
    res.json({
        message : `user ${userId} is updated to ${name} and email ${email}`
    })
})
app.listen(PORT,() =>[
    console.log(`server is running on http://localhost:${PORT}`)
])