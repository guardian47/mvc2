import { Schema,model } from "mongoose";

const remediales_schema = new Schema({
    full_name:{
        type:String
    },
    estatus:{
        type:String
    }
}) 

export const remedial_model = new model('Remedial', remediales_schema)