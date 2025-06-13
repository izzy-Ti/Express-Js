import express from 'express'
import router from './router.js'
const app = express()

const PORT = 3000

// Define a simple route
app.use('/user',router)
app.use(express.json())
app.post('/user',(req,res) =>{
    const { name, email } = req.body;
    res.json({
        message: `user ${name} is registered with email ${email} successfully`
    })
})
app.put('/user/:id', (req,res) =>{
    const userId = req.params.id;
    const {name, email} = req.body;
    res.json({
        message : `user ${userId} is updated to ${name} and email ${email}`
    })
})
app.delete('/user/:id', (req,res) =>{
    const userId = req.params.id;
    res.json({
        message : `The user with id of ${userId} is deleted successfully`
    })
})
app.listen(PORT,() =>[
    console.log(`server is running on http://localhost:${PORT}`)
])