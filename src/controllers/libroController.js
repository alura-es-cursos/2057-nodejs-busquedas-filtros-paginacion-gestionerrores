import Error404 from '../errors/Error404.js';
import { autorModel } from '../models/autor.js';
import libroModel from '../models/libros.js';

class libroController {
    async listaLibros(req, res, next) {
        try {
            const listaLibros = await libroModel.find({});
            res.status(200).json(listaLibros);
        } catch (error) {
            next(error);
        }
    }

    async listaLibroPorId(req, res, next) {
        const id = req.params.id;
        try {
            const libro = await libroModel.findById(id);

            if (libro != null) {
                res.status(200).json(libro);
            } else {
                next(new Error404('Libro no localizado'));
            }
        } catch (error) {
            next(error);
        }
    }

    async creaLibro(req, res, next) {
        try {
            const dataLibro = req.body;
            const autorLibro = await autorModel.findById(dataLibro.autor);
            const libroCompleto = { ...dataLibro, autor: { ...autorLibro._doc } };
            const nuevoLibro = await libroModel.create(libroCompleto);
            res.status(201).json({ result: true, nuevoLibro: nuevoLibro });
        } catch (error) {
            next(error);
        }
    }

    async actualizaLibroPorId(req, res, next) {
        const id = req.params.id;
        try {
            const libro = await libroModel.findByIdAndUpdate(id, req.body);

            if (libro != null) {
                res.status(200).json({ result: true, mensaje: 'Libro actualizado' });
            }
            else {
                next(new Error404('Libro no localizado'));
            }
            
        } catch (error) {
            next(error);
        }
    }

    async eliminaLibroPorId(req, res, next) {
        const id = req.params.id;
        try {
            const libro = await libroModel.findByIdAndDelete(id);

            if (libro != null) {
                res
                    .status(200)
                    .json({ result: true, mensaje: 'Libro borrado con éxito' });
            }
            else {
                next(new Error404('Libro no localizado'));
            }
            
        } catch (error) {
            next(error);
        }
    }

    async listaLibrosParametros(req, res, next) {
        try {
            const { editorial } = req.query;
            console.log(editorial);
            const listaLibros = await libroModel.find({ editorial });
            res.status(200).json(listaLibros);
        } catch (error) {
            next(error);
        }
    }
}

export default new libroController();
