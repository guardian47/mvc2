import {model  } from "mongoose";
import { reprobados_schema } from "./reporobados.model.js";

export const aprobado_model = new model('Aprobado', reprobados_schema)