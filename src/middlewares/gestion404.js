import Error404 from '../errors/Error404.js';

// eslint-disable-next-line no-unused-vars
function gestion404(req, res, next) {
    next(new Error404());
}

export default gestion404;