import ErrorBase from './ErrorBase.js';

class Error404 extends ErrorBase {
    constructor() {
        super();
        this.message = 'Página no encontrada';
        this.status = 404;
    }
}

export default Error404;