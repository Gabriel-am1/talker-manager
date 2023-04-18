const express = require('express');
const autenticacao = require('../utils/autenticacao');

const autenticacaoLogin = express.Router();

autenticacaoLogin.post('/', (req, res) => {
    const autenticacao_tamanho = 16;
    const { email, password } = req.body;
    const token = autenticacao(autenticacao_tamanho);

    res.status(200).json({ token });
});

module.exports = autenticacaoLogin;