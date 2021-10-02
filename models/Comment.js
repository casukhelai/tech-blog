const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userName_id: {
            type: DataTypes.Integer,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            }
        },
        bodyText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Post',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
    }
);

module.exports = Comment;