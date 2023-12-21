import ErrorBase from '../errors/ErrorBase.js';

async function paginacion(req, res, next) {
    try {
        let { limite = 10, pagina = 1, orden = '_id:1'} = req.query;

        limite = parseInt(limite);
        pagina = parseInt(pagina);

        let [ campoOrden, modoOrden ] = orden.split(':');
        
        modoOrden = parseInt(modoOrden);
        const resultado = req.resultado;

        if (resultado && limite > 0 && pagina > 0 && (modoOrden === 1 || modoOrden === -1)) {
            const docResultado = await resultado.find()
                .sort({ [campoOrden]: modoOrden })
                .skip((limite * (pagina-1)))
                .limit(limite);

            res.status(200).json(docResultado);
        } else {
            next(new ErrorBase('Parámetros no válidos para la consulta',400));
        }
    } catch (error) {
        next(error);
    }
}

export default paginacion;