const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(pass) {
        return bcrypt.compareSync(pw, this.password);
    }
}

User.init(
    {
        
    },
    {

    },
    {

    },
    {

    }
);

module.exports = User;