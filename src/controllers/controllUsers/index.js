const sq = require('../../database/connection');

exports.insert = async (req, res) => {
    var attribute = { nomeUser, emailUser, imageURL } = req.body;

    const user = sq.define('users', attribute);
    user.findOrCreate(
        {
            where: { emailUser } = attribute,
            defaults: attribute
        }).then(([user, created]) => {
            console.log(user.get({
                plain: true
            }))

            if (!created) {
                return res.status(201).json({
                    message: 'ERRO: O usuario já possui um login',
                    attribute
                })
            } else {
                return res.status(201).json({
                    message: 'O usuario inserido com sucesso',
                    attribute
                })
            }
        })
}