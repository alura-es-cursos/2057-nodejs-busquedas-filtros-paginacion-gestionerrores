import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
        },
        nombre: {
            type: String,
            required: [true,'El nombre del autor es obligatorio'],
        },
        nacionalidad: {
            type: String,
        },
    },
    { versionKey: false }
);

const autorModel = mongoose.model('autores', autorSchema);

export { autorModel, autorSchema };
