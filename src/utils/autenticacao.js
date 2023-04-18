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
