const { DataTypes } = require('sequelize');// Seleciona a tipagem do ORM
const sq = require('../connection'); // Se conecta ao banco de dados

const user = sq.define('users', {
    nomeUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

/** Cria a tabela usuarios */
// user.sync({ force: true });

//user.drop()

//Exportando a tabela criada para realizar outras querys
module.exports = user;

