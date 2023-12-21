import ErrorBase from './ErrorBase.js';

class ErrorRequisicion extends ErrorBase {

    constructor(value = '', message = '', status = 400) {
        super();
        if (message == '')
            message = `Error: Valor del ID del documento no corresponde - ID:${value}`;
        this.message = message;
        this.status = status;
    }
}

export default ErrorRequisicion;