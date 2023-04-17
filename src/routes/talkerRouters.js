const express = require('express');
const { readTalkers, getTalkerForId } = require('../utils/fsUtils');

const talkersRouter = express.Router();

talkersRouter.get('/', async (req, res) => {
  try {
    const talkersData = await readTalkers();
    return res.status(200).json(talkersData.length ? talkersData : []);
  } catch (error) {
    console.error('Erro ao ler os dados dos palestrantes:', error);
    return res.status(500).json({ error: 'Erro ao obter dados dos palestrantes' });
  }
});

talkersRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const talkersDataId = await getTalkerForId(id);
  
    // Verifica se foi encontrado algum palestrante com o ID fornecido
    if (talkersDataId.length > 0) {
      return res.status(200).json(talkersDataId[0]); // Retorna o primeiro objeto do array
    } else {
      // Define a mensagem de erro quando nenhuma pessoa palestrante for encontrada
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
  });
  
  module.exports = talkersRouter;