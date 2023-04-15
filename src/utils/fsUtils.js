// const fs = require('fs').promises;
// const path = require ("path");

// const oradores = async () => {
//     const informacao = await fs.readFile(path.resolve(_dirname, '../talkers.json'));
//     const allPalestrantes = JSON.parse(informacao);
//     return allPalestrantes;
// } 
// module.exports = { oradores };

const fs = require('fs').promises;
const path = require("path");

const readTalkers = async () => {
  const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
  const allTalkers = JSON.parse(data);
  return allTalkers;
}

module.exports = { readTalkers };