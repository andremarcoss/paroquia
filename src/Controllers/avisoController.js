const mongoose = require('mongoose');
const Aviso = require('../Models/avisoModel');

exports.registrarAviso = function(req, res, next){
    Aviso.create({
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        descricao: req.body.descricao
    }, function(err, avisos){
        if(err)
            return res.status(500).send({
                message: 'Erro ao enviar aviso'
            })
        return res.status(200).send({
            message: 'Aviso enviado com sucesso',
            Aviso: avisos
        })
    })
}

exports.getTodosAvisos = function(req, res, next){
    var query = Aviso.find();

    query.exec( function(err, avisos){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir os avisos',
                erro: err
            })

        return res.status(200).json(avisos)
    })
}