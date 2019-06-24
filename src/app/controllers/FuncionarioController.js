const Funcionario = require('../models/Funcionario');

class FuncionarioControlller {

    async index(req, resp){

        const funcionarios = await Funcionario.paginate({}, {
            page: req.query.page || 1,
            limit: 20, 
            sort: '-createdAt'
        });

        return resp.json(funcionarios);
    }
    
    async show(req, resp){
        const funcionario = await Funcionario.findById(req.params.id);

        return resp.json(funcionario)
    }

    async store(req, resp){
        const funcionario = await Funcionario.create(req.body);

        return resp.json(funcionario);
    }

    async update(req, resp){
        const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return resp.json(funcionario);
    }

    async destroy(req, resp){
        await Funcionario.findByIdAndDelete(req.params.id);

        return resp.send();
    }
}

module.exports = new FuncionarioControlller();