import express from 'express';
import conectaBaseDeDatos from './config/conexionDB.js';
import routes from './routes/index.js';
import gestionErrores from './middlewares/gestionErrores.js';
import gestion404 from './middlewares/gestion404.js';

const app = express();

routes(app);

app.use(gestion404);
// eslint-disable-next-line no-unused-vars
app.use(gestionErrores);

const db = await conectaBaseDeDatos();

db.on('error',(error) => {
    console.log('Error en la conexión',error);
});

db.once('open', () => {
    console.log('Conexión a la base de datos exitosa');
});

export default app;

