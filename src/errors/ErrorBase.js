class ErrorBase extends Error {
    constructor(message = '', status = 500) {
        super();
        if (message == '') {
            message = 'Error interno del servidor';
        }
        this.message = message;
        this.status = status;
    }

    enviaRespuesta(res) {
        res.status(this.status).json({
            error: this.message,
            status: this.status,
        });
    }
}

export default ErrorBase;