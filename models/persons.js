import mongoose from "mongoose";

const peronSchema = new mongoose.Schema({
    name: { type:String, require: true, },
    age: Number,
    email: { type:String, require: true, unique:true},
    userOrder: {type: Object,default:{order_item:"", order_quantity: ""}}
},{timestamps:true, minimize:false})
export const person = mongoose.model("person", peronSchema)