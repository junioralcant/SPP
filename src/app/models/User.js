const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    cargo: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

// criptografando senha
UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        return next();
    }

    this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
    compareHash (password) {
        return bcrypt.compare(password, this.password);
    }
}

UserSchema.statics = {
    generateToken ({ id }){
        return jwt.sign({ id }, authConfig.secret ,{
            expiresIn: authConfig.ttl
        });
    }
}

module.exports = mongoose.model('User', UserSchema);