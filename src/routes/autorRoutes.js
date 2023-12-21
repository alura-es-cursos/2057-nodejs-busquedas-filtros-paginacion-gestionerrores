import express from 'express';
import autorController from '../controllers/autorController.js';
import paginacion from '../middlewares/gestionPaginacion.js';

const routes = express.Router();

//Consulta los autores
routes.get('/autores', autorController.listaAutores, paginacion);
//Consulta un autores en particular
routes.get('/autores/:id', autorController.listaAutorPorId);
//Crear un autores
routes.post('/autores', autorController.creaAutor);
//Actualización de un autor
routes.put('/autores/:id', autorController.actualizaAutorPorId);
//Borrado de un autor
routes.delete('/autores/:id', autorController.eliminaAutorPorId);

export default routes;
