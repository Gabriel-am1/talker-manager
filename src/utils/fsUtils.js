const fs = require('fs').promises;
const path = require('path');

const readTalkers = async () => {
  const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
  const allTalkers = JSON.parse(data);
  return allTalkers;
};

const getTalkerForId = async (id) => {
  const allTalkers = await readTalkers();
  const palestrante = allTalkers.filter(palestrante => palestrante.id === Number(id));
  return palestrante;
};

module.exports = { readTalkers, getTalkerForId };