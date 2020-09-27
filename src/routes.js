const routes = require('express').Router();

const users = require('./controllers/controllUsers/index');
const books = require('./controllers/controllBooks/index');

const listbooks = require('./database/createTable/createBook');

routes.get('/home', (req, res) => res.json({ serivdorOn: true }));

routes.post('/insertUser', users.insert);
routes.post('/insertBook', books.insert);

routes.post('/booksList', async (req, res) => {
    const { categoria } = req.body;

    const a = await listbooks.findAll({
        where: {
            categoryBook: categoria
        }
      })

    return res.json(a);
})

module.exports = routes;