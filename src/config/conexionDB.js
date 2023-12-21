import mongoose from 'mongoose';

async function conectaBaseDeDatos() {
    mongoose.connect(process.env.DB_CONNECT);
    return mongoose.connection;
}

export default conectaBaseDeDatos;
