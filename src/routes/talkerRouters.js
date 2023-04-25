// const express = require('express');
// const { readTalkers, getTalkerForId } = require('../utils/fsUtils');
// const { validateFieldsExistence, validateFieldsRules, validateToken } = require('../middleware/palestrantesValidator');

// const talkersRouter = express.Router();

// talkersRouter.get('/', async (req, res) => {   
//   try {
//     const talkersData = await readTalkers();
//     return res.status(200).json(talkersData.length ? talkersData : []);
//   } catch (error) {
//     console.error('Erro ao ler os dados dos palestrantes:', error);
//     return res.status(500).json({ error: 'Erro ao obter dados dos palestrantes' });
//   }
// });

// talkersRouter.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     const talkersDataId = await getTalkerForId(id);
  
//     // Verifica se foi encontrado algum palestrante com o ID fornecido
//     if (talkersDataId.length > 0) {
//       return res.status(200).json(talkersDataId[0]); // Retorna o primeiro objeto do array
//     }
//       // Define a mensagem de erro quando nenhuma pessoa palestrante for encontrada
//       return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
//   });

//   talkersRouter.post('/', validateToken, validateFieldsExistence, validateFieldsRules, async (req, res) => {
//     const talker = req.body;

//     const newTalkerId = await registerTalker(talker);
    
//     return res.status(201).json({id: newTalkerId, ...talker});

//   });
  
//   module.exports = talkersRouter;
