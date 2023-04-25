const express = require('express');

const fs = require('fs');

const router = express.Router();
const DB = './src/talker.json';

const {   
  tokenValidated,
  nameValidated, 
  ageValidated, 
  talkValidated, 
  rateValidated,  
  dateValidated,
} = require('../middleware'); 
// const { personFound } = require('../middleware/talkerValidations');

module.exports = router.put('/:id', 
tokenValidated,
  nameValidated, 
  ageValidated, 
  talkValidated, 
  rateValidated,  
  dateValidated,
  // personFound,
async (req, res, next) => {  
  try {   
    const { id } = req.params;
    const talker = req.body;
    const data = JSON.parse(fs.readFileSync(DB, 'utf8'))
      .map((talk) => (talk.id === Number(id) ? { id: Number(id), ...talker } : talk));
  
    fs.writeFileSync(DB, JSON.stringify(data));
    return res.status(200).json({ id: Number(id), ...talker });    
  } catch (error) {
    return next(error);
  }
}); 