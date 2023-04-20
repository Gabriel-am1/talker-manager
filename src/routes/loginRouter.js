const express = require('express');
const autenticacao = require('../utils/autenticacao');
const { emailValidation, passwordValidation } = require('../utils/validacaoLogin');

const autenticacaoLogin = express.Router();

autenticacaoLogin.post('/', emailValidation, passwordValidation, (req, res) => {
    const autenticacaoTamanho = 16;
    const token = autenticacao(autenticacaoTamanho);

    res.status(200).json({ token });
});

module.exports = autenticacaoLogin;
