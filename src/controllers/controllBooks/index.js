const sq = require('../../database/connection');

exports.insert =  (req, res) => {
    
    const attribute =  {
        nameBook,
        autorBook,
        dateBook,
        idUser,
        categoryBook,
        } = req.body;

    console.log(attribute);

    const book = sq.define('books', attribute);

    book.findOrCreate(
        {
            where: { nameBook } = attribute,
            defaults: attribute
        }).then(([user, created]) => {
            console.log(user.get({
                plain: true
            }))

            if (!created) {
                return res.status(201).json({
                    message: 'Já possui um livro com esse nome',
                    attribute
                })
            } else {
                return res.status(201).json({
                    message: 'Livro adicionado com sucesso',
                    attribute
                })
            }
        })
}


exports.post = (req, res) => {
    const {originalname} = req.file;

    return res.json({
        message: "booksControl iniciado com sucesso!",
        livro: {
            name: originalname
        }
    })
}