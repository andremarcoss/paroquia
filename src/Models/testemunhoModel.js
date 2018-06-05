var mongoose = require('mongoose');
var TestemunhoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, 'Informe seu nome']
    },
    telefone:{
        type: String,
        required: [true, 'Informe seu telefone']
    },
    email:{
        type: String,
    },
    testemunho:{
        type: String,
        required: [true, 'Informe seu testemunho']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Testemunho', TestemunhoSchema);
