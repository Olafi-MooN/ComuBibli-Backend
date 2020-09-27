const express = require('express')();

express.use(require('./src/app'));

express.listen(process.env.PORT || 3333, () => {
    console.log('Servidor inciado com sucesso!')
})