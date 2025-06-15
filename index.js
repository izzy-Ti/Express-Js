import express from 'express'
import router from './router.js'
import {upload} from './config/multer.js'
import { connectDB } from './config/db.js'
import { person } from './models/persons.js'

await connectDB()
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.post('/post',express.json(), async (req,res) =>{
    const { email, name , age} = req.body
    const newPerson = new person({
        name,
        email,
        age
    })
    await newPerson.save()
    console.log(newPerson)
    res.send('form accepted')
})

app.put('/post', express.json(), async (req,res) =>{
    const {id, age} = req.body
    const personData = await person.findByIdAndUpdate(id, {age: '40'})
    console.log(personData)
    res.send('Person updated')

})
app.listen(PORT,() =>[
    console.log(`server is running on http://localhost:${PORT}`)
])