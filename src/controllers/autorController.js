import Error404 from '../errors/Error404.js';
import { autorModel } from '../models/autor.js';

class autorController {
    async listaAutores(req, res, next) {
        try {
            const listaAutores = await autorModel.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            next(error);
        }
        
    }

    async listaAutorPorId(req, res, next) {
        const id = req.params.id;
        try {
            const autor = await autorModel.findById(id);
            if (autor != null) {
                res.status(200).json(autor);
            } else {
                next(new Error404('Autor no localizado'));
            }
            
        } catch (error) {
            next(error);
        }
    }

    async creaAutor(req, res, next) {
        try {
            const nuevoAutor = await autorModel.create(req.body);
            res.status(201).json({ result: true, nuevoAutor: nuevoAutor });
        } catch (error) {
            next(error);
        }
    }

    async actualizaAutorPorId(req, res, next) {
        const id = req.params.id;
        try {
            const autorResultado = await autorModel.findByIdAndUpdate(id, req.body);
            if (autorResultado != null) {
                res.status(200).json({ result: true, mensaje: 'Autor actualizado' });
            } else {
                next(new Error404('Autor no localizado'));
            }
            
        } catch (error) {
            next(error);
        }
    }

    async eliminaAutorPorId(req, res, next) {
        const id = req.params.id;
        try {
            const autorResultado = await autorModel.findByIdAndDelete(id);

            if (autorResultado != null) {
                res
                    .status(200)
                    .json({ result: true, mensaje: 'Autor borrado con éxito' });
            } else {
                next(new Error404('Autor no localizado'));
            }
            
        } catch (error) {
            next(error);
        }
    }
}

export default new autorController();
