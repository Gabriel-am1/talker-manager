// const express = require('express');
// const autenticacao = require('../utils/autenticacao');
// const { emailValidation, passwordValidation } = require('../middleware/validacaoLogin');

// const autenticacaoLogin = express.Router();

// autenticacaoLogin.post('/', emailValidation, passwordValidation, (req, res) => {
//     const autenticacaoTamanho = 16;
//     const token = autenticacao(autenticacaoTamanho);

//     res.status(200).json({ token });
// });

// module.exports = autenticacaoLogin;

///////////////////////////////////////////////////////////
const express = require('express');
const crypto = require('crypto');
// const { StatusCodes } = require('http-status-codes');
const { 
  emailValidated, 
  passwordValidated, 
} = require('../middleware');

const router = express.Router();

module.exports = router.post('/', 
emailValidated, 
passwordValidated,
(req, res, next) => {
  try {     
    const token = crypto.randomBytes(8).toString('hex');      
    return res.status(200).json({ token });  
  } catch (e) {
    return next(e);
  }
}); 