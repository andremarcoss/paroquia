var mongoose = require('mongoose');
var AvisoSchema = new mongoose.Schema({
    titulo:{
        type:String,
        required: [true, 'Informe um Título']
    },
    subtitulo:{
        type: String,
    },
    descricao:{
        type: String,
        required: [true, 'Informe a Descricao']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Aviso', AvisoSchema);