const express= require('express');

const router= express.Router();

const projects= require('../data/dataAcess');

//get all projects
router.get('/', (req, res) => {
  res.status(200).json({message: "success!"});
});

//add projects
router.post('/', (req, res) => {
  res.status(200).json({message: "success!"});
});

module.exports= router;