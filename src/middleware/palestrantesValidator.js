// const validateFieldsExistence = (req, res, next) => {
//     const talker = req.body;
  
//     const adjustedTalker = Object.assign({}, talker, talker.talk);
//     const FIELDS_TO_CHECK = ['name', 'age', 'talk', 'watchedAt', 'rate'];
  
//     FIELDS_TO_CHECK.forEach((field) => {
//       if (adjustedTalker[field] === undefined) return next({ status: 400, message: `O campo \"${field}"\ é obrigatório`});
//     })
//     next();
//   };
  
//   const validateToken = (req, res, next) => {
//     const { authorization } = req.headers;
//     if (!authorization) return next({ status: 401, message: 'Token não encontrado'});
//     if (authorization.length !== 16 || typeof authorization !== 'string') return next({ status: 401, message: 'Token inválido'})
  
//     next();
//   };
  
//   const validateFieldsRules = (req, res, next) => {
//     const talker = req.body;
//     const {
//       name,
//       age,
//       talk: { watchedAt, rate },
//     } = talker;
  
//     const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  
//     if (name.length < 3) return next({ status: 400, message: 'O "name" deve ter pelo menos 3 caracteres'});
//     if (age < 18 || !Number.isInteger(age)) return next({ status: 400, message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
//     if (!dateRegex.test(watchedAt)) return next({
//       status: 400,
//       message: 'O campo "watchedAt" deve ter o formato \"dd/mm/aaaa\"',
//     });
//     if (rate > 5 || rate < 1 || !Number.isInteger(rate)) return next({
//         status: 400,
//         message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
//       });
  
//     next();
//   };
  
//   module.exports = { validateFieldsExistence, validateFieldsRules, validateToken };