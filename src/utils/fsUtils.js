const fs = require('fs').promises;
const path = require('path');

const readTalkers = async () => {
  const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
  const allTalkers = JSON.parse(data);
  return allTalkers;
};

const getTalkerForId = async (id) => {
  const allTalkers = await readTalkers();
  const oradores = allTalkers.filter((palestrante) => palestrante.id === Number(id));
  return oradores;
};

module.exports = { readTalkers, getTalkerForId };