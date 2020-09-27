const { DataTypes } = require('sequelize');
const sq = require('../connection');

const book = sq.define('books', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nameBook: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autorBook: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateBook: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fileBook: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryBook: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


// relacionamento onde um usuario tem muitos livros
// user.hasMany(book, {foreignKey: 'idUser', as: 'idUser'})

//book.sync({ force: true });

// book.drop({cascade: true})


module.exports = book;
