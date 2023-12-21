import ErrorBase from './ErrorBase.js';

class ErrorValidacion extends ErrorBase {
    constructor(message = '', status = 400) {
        super();
        
        this.message = `Error - Faltan dados obligatorios: ${message}`;
        this.status = status;
    }
}

export default ErrorValidacion;