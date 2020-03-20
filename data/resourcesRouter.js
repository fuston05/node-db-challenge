const express= require('express');

const router= express.Router();

const resources= require('../data/dataAcess');

//get all resources
router.get('/', (req, res) => {
  res.status(200).json({message: "success!"});
});

//add resources
router.post('/', (req, res) => {
  res.status(200).json({message: "success!"});
});

module.exports= router;