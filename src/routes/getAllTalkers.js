const express = require('express');
// const { StatusCodes } = require('http-status-codes');

const fs = require('fs');

const router = express.Router();
const DB = './src/talker.json';

module.exports = router.get('/', async (_req, res, next) => {
  try {    
    const data = await JSON.parse(fs.readFileSync(DB, 'utf8'));
    if (data) {
      return res.status(200).json(data);
    } return res.status(200).json([]);  
  } catch (error) {
    next(error);
  } 
});