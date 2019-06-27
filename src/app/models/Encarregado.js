const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Encarregado = new mongoose.Schema({
    nome: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Funcionario',
        required: true,
        
    },
    setor: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

Encarregado.plugin(mongoosePaginate);
module.exports = mongoose.model('Encarregado', Encarregado);