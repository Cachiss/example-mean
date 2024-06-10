import { Schema, model } from "mongoose";

const empleadoSchema = new Schema(
    {
        nombre: {
            type: String
        },
        departamento: {
            type: String
        },
        email: {
            type: String
        },
        telefono: {
            type: String
        }
    },
    {
        collection: 'empleados'
    }
);

export const empleadoModel = model('Empleado', empleadoSchema);