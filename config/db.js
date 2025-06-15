import mongoose from 'mongoose'
const MONGOBD_URI = 'mongodb+srv://izzy:0911700417@cluster0.nnrrowl.mongodb.net/newDB'

export const connectDB = async () =>{
    await mongoose.connect(MONGOBD_URI).then(()=>{
        console.log(`Database connected`);
    })
}

