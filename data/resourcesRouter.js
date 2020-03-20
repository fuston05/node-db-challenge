const express= require('express');

const router= express.Router();

const resources= require('../data/dataAcess');


//get all resources
router.get('/', (req, res) => {
  resources.findResources()
    .then( resources => {
      res.status(200).json({resources});
    } )
    .catch(error => {
      res.status(500).json({error: "Could not process your request"});
    })
});

//add resources
router.post('/', (req, res) => {
  resources.addResource(req.body)
  .then( newRes => {
    res.status(200).json({newRes});
  } )
  .catch(error => {
    res.status(500).json({error: "Could not process your request"});
  })
});

module.exports= router;