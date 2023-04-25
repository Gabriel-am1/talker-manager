// const fs = require('fs').promises;
// const path = require('path');
// const getNewId = require('./newtalker');

// const readTalkers = async () => {
//   const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
//   const allTalkers = JSON.parse(data);
//   return allTalkers;
// };
// // alterando pra testar linter
// const getTalkerForId = async (id) => {
//   const allTalkers = await readTalkers();
//   const oradores = allTalkers.filter((palestrante) => palestrante.id === Number(id));
//   return oradores;
// };

// const registerTalker = async (newTalker, _token) => {
//   const talkers = await readTalkers();
//   const newId = getNewId(talkers);

//   const newTalkerObject = { id: newId, ...newTalker }
//   const updateTalkers = JSON.stringify([...talkers, newTalkerObject]);

//   const talkerPath = path.resolve(__dirname, '../talker.json');
//   await fs.writeFile(talkerPath, updateTalkers, (err) =>
//     console.log(`erro ao cadastrar: ${err}`)
//   );
//   return newId;
// };

// module.exports = { readTalkers, getTalkerForId, registerTalker };