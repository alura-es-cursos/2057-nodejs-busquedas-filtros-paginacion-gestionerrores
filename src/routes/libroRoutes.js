import express from 'express';
import libroController from '../controllers/libroController.js';
import paginacion from '../middlewares/gestionPaginacion.js';


const routes = express.Router();

//Consulta los libros
routes.get('/libros', libroController.listaLibros, paginacion);
//Consulta por parámetros
routes.get('/libros/consulta', libroController.listaLibrosParametros, paginacion);
//Consulta un libro en particular
routes.get('/libros/:id', libroController.listaLibroPorId);
//Crear un libro
routes.post('/libros', libroController.creaLibro);
//Actualización de un libro
routes.put('/libros/:id', libroController.actualizaLibroPorId);
//Borrado de un libro
routes.delete('/libros/:id', libroController.eliminaLibroPorId);

export default routes;
