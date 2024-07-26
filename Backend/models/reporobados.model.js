import {Schema, model} from 'mongoose';

export const reprobados_schema = new Schema({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    },
    promedio:{
        type:Number
    }
})

export const reprobados_model = new model('Reprobados', reprobados_schema) 