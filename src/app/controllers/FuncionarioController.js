const Funcionario = require('../models/Funcionario');

class FuncionarioControlller {
    
    async store (req , resp) {
        const funcionario = await Funcionario.create(req.body);

        return resp.json(funcionario);
    }
}

module.exports = new FuncionarioControlller();