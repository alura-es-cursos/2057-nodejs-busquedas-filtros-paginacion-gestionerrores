import mongoose from "mongoose";

async function conectaBaseDeDatos() {
  mongoose.connect(
    "mongodb+srv://alura:formacion123@cluster0.79nbkgj.mongodb.net/libreria_alura?retryWrites=true&w=majority"
  );
  return mongoose.connection;
}

export default conectaBaseDeDatos;
