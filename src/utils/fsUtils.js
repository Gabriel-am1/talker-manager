const fs = require('fs').promises;
const path = require('path');

const readTalkers = async () => {
  const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
  const allTalkers = JSON.parse(data);
  return allTalkers;
};

module.exports = { readTalkers };