const Encarregado = require('../models/Encarregado');  

class EncarregadoController {

    async index(req, resp){
        const encarreados = await Encarregado.paginate({},{
            page: req.query.page || 1,
            limit: 20,
            populate: [ 'nome' ],
            sorte: '-createdAt'
        });

        return resp.json(encarreados);
    }

    async show(req, resp){
        const encarreado = await Encarregado.findById(req.params.id).populate('nome');

        return resp.json(encarreado);
    }

    async store(req, resp){
        const encarreado = await Encarregado.create({ ...req.body, nome: req.params.id });

        return resp.json(encarreado);
    }

    async update(req, resp){
        const encarreado = await Encarregado.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).populate('nome');

        return resp.json(encarreado);
    }

    async destroy(req, resp){
        await Encarregado.findByIdAndDelete(req.params.id);

        return resp.send();
    }


}

module.exports = new EncarregadoController();