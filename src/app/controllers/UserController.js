const User = require('../models/User');
const filters = require('../../filter/filters');

class UserController{

    async index(req, resp){

        const filters = {}
        
        if(req.query.nome){
            filters.nome = new RegExp(req.query.nome, 'i');
        }

        // const nome = req.query.nome;

        // filters(nome);

        const users = await User.paginate(filters, {
            page: req.query.page || 1,
            limit: 20, 
            sort: '-createdAt'
        });

        return resp.json(users)
    }
    
    async show(req, resp){
        const user = await User.findById(req.params.id);

        return resp.json(user)
    }

    async store(req, resp){
        const { email } = req.body;

        if( await User.findOne({ email })){
            return resp.status(400).json({ error: 'User already exists'});
        }

        const user = await User.create(req.body);

        return resp.json(user);
    }

    async update(req, resp){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return resp.json(user);
    }

    async destroy(req, resp){
        await User.findByIdAndDelete(req.params.id);

        return resp.send();
    }

}

module.exports = new UserController();