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
        },
        precio: {
            type: Number,
        },
        paginas: {
            type: Number,
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
