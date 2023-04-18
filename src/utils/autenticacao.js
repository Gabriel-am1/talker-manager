function autenticacao(size)  {
    let token = "";
    const letras =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < size; i++) {
      token += letras.charAt(
        Math.floor(Math.random() * letras.length)
      );
    }
    return token;
  }
  
  module.exports = autenticacao;

// const autenticacao = (length) => {
//   const characters = 
//   'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
//   const novoLogin = [];  
//   for (let index = 0; index < length; index += 1) {
//     const validacao = (Math.random() * (range.length - 1)).toFixed(0);
//     novoLogin[index] = characters[validacao];
//   }
//   return novoLogin.join('');
// };

// module.exports = autenticacao;
