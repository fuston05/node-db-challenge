const express= require('express');

const router= express.Router();

const tasks= require('../data/dataAcess');

//get all tasks
router.get('/', (req, res) => {
  res.status(200).json({message: "success!"});
});

//add tasks
//include proj_name and proj_descr
router.post('/', (req, res) => {
  res.status(200).json({message: "success!"});
});

module.exports= router;