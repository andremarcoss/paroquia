const mongoose = require('mongoose');
const Testemunho = require('../Models/testemunhoModel');

exports.registrarTestemunho = function(req, res, next){
    Testemunho.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        testemunho: req.body.testemunho
    }, function(err, testemunhos){
        if(err)
            return res.status(500).send({
                message: 'Erro ao criar testemunho'})

        return res.status(200).send({
            message: 'Testemunho criado com sucesso',
            Testemunho: testemunhos
        })
    })
}

exports.getTodosTestemunhos = function(req, res, next){
    var query = Testemunho.find();

    query.exec( function(err, testemunhos){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir os testemunhos',
                erro: err
            })

        return res.status(200).json(testemunhos)
    })
}

exports.getUmTestemunho = function(req, res, next){
    const _idTestemunho = req.params.id_testemunho;
    
    Testemunho.findById(_idTestemunho, function(err, testemunhos){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir testemunho',
                erro: err
            })
        return res.status(200).send(testemunhos)
    })
}

