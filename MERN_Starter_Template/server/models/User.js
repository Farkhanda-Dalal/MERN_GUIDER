import { Schema, model } from "mongoose";

const newSchema= new Schema({

});

export const User=model("user",newSchema);