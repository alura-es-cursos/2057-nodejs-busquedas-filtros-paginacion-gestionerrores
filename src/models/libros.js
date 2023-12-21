import mongoose from 'mongoose';
import { autorSchema } from './autor.js';

const libroSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
        },
        titulo: {
            type: String,
            required: [true,'El título del libro es obligatorio'],
        },
        editorial: {
            type: String,
            required: [true,'La editorial del libro es necesaria'],
            enum: {
                values: ['Alura','Alura Latam','Casa de código'],
                message: 'Valor de editorial no válido. Valor enviado: {VALUE}'
            }
        },
        precio: {
            type: Number,
            validate: {
                validator: (valor) => {
                    return ((valor > 500 && valor < 1000) || (valor > 2000));
                },
                message: 'El precio del libro debe estar entre 500 y 1000 o debe ser mayor a 2000. Valor enviado: {VALUE}'
            }
        },
        paginas: {
            type: Number,
            min: [30,'El mínimo de páginas válido es 30. Valor enviado: {VALUE}'],
            max: [1500,'El máximo de páginas válido es 1500. Valor enviado: {VALUE}'],
        },
        autor: {
            type: autorSchema,
            required: [true,'El autor es obligatorio']
        }
    },
    { versionKey: false }
);

const libroModel = mongoose.model('libros', libroSchema);

export default libroModel;
