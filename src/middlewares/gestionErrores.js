import mongoose from 'mongoose';
import ErrorBase from '../errors/ErrorBase.js';
import ErrorRequisicion from '../errors/ErrorRequisicion.js';
import ErrorValidacion from '../errors/ErrorValidacion.js';
import Error404 from '../errors/Error404.js';

// eslint-disable-next-line no-unused-vars
function gestionErrores(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        new ErrorRequisicion(error.value).enviaRespuesta(res);
    } else if (error instanceof mongoose.Error.ValidationError) {
        const messageError = Object.values(error.errors).map((e) => e.message).join('; ');
        new ErrorValidacion(messageError).enviaRespuesta(res);
    } else if (error instanceof Error404) {
        new Error404().enviaRespuesta(res);
    }
    else {
        new ErrorBase(error.message, error.status).enviaRespuesta(res);
    }
}

export default gestionErrores;