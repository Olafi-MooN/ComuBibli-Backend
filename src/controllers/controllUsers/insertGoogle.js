const sq = require('../../database/connection');

function InsertUserGoogle( emailUser, nameUser, passwordUser, phoneUser) {

    const book = sq.define('users', {emailUser, nameUser, passwordUser, phoneUser});
    book.findOrCreate(
        {
            where: emailUser,
            defaults: {  emailUser, nameUser, passwordUser, phoneUser }
        }).then(([user, created]) => {
            console.log(user.get({
                plain: true
            }))

            if (!created) {
                return res.status(201).json({
                    message: 'ERRO: O usuario já possui um login',
                    attribute: {  emailUser, nameUser, passwordUser, phoneUser }
                })
            } else {
                return res.status(201).json({
                    message: 'O usuario inserido com sucesso',
                    attribute: {  emailUser, nameUser, passwordUser, phoneUser }
                })
            }
        })
}

module.exports = InsertUserGoogle;