const User = require('../models/User');

class UserController{

    async store(req, resp){
        const { email } = req.body;

        if( await User.findOne({ email })){
            return resp.status(400).json({ error: 'User already exists'});
        }

        const user = await User.create(req.body);

        return resp.json(user);
    }
}

module.exports = new UserController();