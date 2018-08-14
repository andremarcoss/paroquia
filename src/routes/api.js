const express = require('express');
const TestemunhoController = require('../Controllers/testemunhoController.js')
const AvisoController = require('../Controllers/avisoController.js')

module.exports = function(app){
    const testemunhoRoute = express.Router();
    const avisoRouter = express.Router();

    app.use('/api', function(req, res){
        res.writeHead(200)
        res.end('API FUNCIONOU COM SUCESSO')
    })

    app.use('/testemunho',
        testemunhoRoute.post('/', TestemunhoController.registrarTestemunho),
        testemunhoRoute.get('/', TestemunhoController.getTodosTestemunhos),
        testemunhoRoute.get('/:id_testemunho', TestemunhoController.getUmTestemunho),
        testemunhoRoute.delete('/:id_testemunho', TestemunhoController.deleteTestemunho)
    );

    app.use('/aviso',
        avisoRouter.post('/', AvisoController.registrarAviso),
        avisoRouter.get('/', AvisoController.getTodosAvisos)
    );
    
}