import { aprobado_model } from "../models/aprobados.model.js";

export const test3 = ()=>{
    console.log("Llamando la tercera collecion")
}

aprobado_model.create({
    name:"Carlos",
    apepat:"Gutierrez",
    apemat:"Novoa",
    promedio:9.5
})