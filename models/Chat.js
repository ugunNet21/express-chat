const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Chat = sequelize.define('Chat', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sender: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Chat;
