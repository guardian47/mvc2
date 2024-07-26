import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { test } from "./Backend/controllers/reprobados.controller.js";
import { test2 } from "./Backend/controllers/remedialePagados.controller.js";
import { test3 } from "./Backend/controllers/aprobados.controller.js";
dotenv.config()

mongoose.connect(process.env.url)
.then(()=>{
    console.log('Funciona la verificacion de la base de datos ')
})
.catch((err)=>{
    console.log('No funciono', err)
})

const app = express()
app.use(cors())

app.listen(4001,()=>{
    console.log('Esta funcionando el servidor ')
})

test()
test2()
test3()