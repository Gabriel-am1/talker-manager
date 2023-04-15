const express = require('express');
const { readTalkers } = require('../utils/fsUtils');

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

module.exports = talkersRouter;