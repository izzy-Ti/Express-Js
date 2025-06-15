import mongoose from "mongoose";

const peronSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})
export const person = mongoose.model("person", peronSchema)