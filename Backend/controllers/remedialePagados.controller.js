import { remedial_model } from "../models/remedialesPagados.model.js";

export const test2 = ()=>{
    console.log('LLamando la segunda collecion')
}

remedial_model.create({
    full_name:"Daniel Gutierrez Gonzales",
    estatus:"Pagado"
})